import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../../shared/components/alert/alert.service';
import { UserService } from '../../core/user/user.service';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  photoForm: FormGroup;
  preview: string;
  file: File;

  constructor(
    private photoService: PhotoService,
    private alertService: AlertService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    })
  }

  upload() {
    const description = this.photoForm.get('description').value;
    const allowComments = this.photoForm.get('allowComments').value;
    this.photoService
      .upload(description, allowComments, this.file)
      .subscribe(
        () => {
          this.alertService.success("Upload complete!", true);
          this.router.navigate(['/user', this.userService.getUserName()]);
        },
        err => {
          this.alertService.warning('Could not upload the photo!', true)
        });
  }

  handleFile(file: File) {
    this.file = file;
    const reader = new FileReader();
    reader.onload = ((event: any) => this.preview = event.target.result);
    reader.readAsDataURL(file);
  }
}
