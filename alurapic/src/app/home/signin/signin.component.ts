import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PlatformDetectorService } from '../../core/platform-detector/platform-detecor.service';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameImput: ElementRef<HTMLInputElement>;

  constructor(
    private platformDetectorService: PlatformDetectorService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService
      .authenticate(userName, password)
      .subscribe(
        () => this.router.navigate(['user', userName]), //Redireciona para página após o login
        err => {
          console.log(err);
          this.loginForm.reset(); //Para limpar o formulário
          this.platformDetectorService.isPlatformBrowser() &&
            this.userNameImput.nativeElement.focus();
          alert('Invalid user name or password!');
        }
      );
  }
}
