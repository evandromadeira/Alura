import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { PlatformDetectorService } from '../../core/platform-detector/platform-detecor.service';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {

  fromUrl: string;
  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor(
    private platformDetectorService: PlatformDetectorService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute
      .queryParams
      .subscribe(params => this.fromUrl = params['fromUrl']);
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.platformDetectorService.isPlatformBrowser() &&
      this.userNameInput.nativeElement.focus();
  }

  login() {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService
      .authenticate(userName, password)
      .subscribe(
        () => this.fromUrl
          ? this.router.navigateByUrl(this.fromUrl)
          : this.router.navigate(['user', userName]), //Redireciona para página após o login
        err => {
          console.log(err);
          this.loginForm.reset(); //Para limpar o formulário
          this.platformDetectorService.isPlatformBrowser() &&
            this.userNameInput.nativeElement.focus();
          alert('Invalid user name or password!');
        }
      );
  }
}
