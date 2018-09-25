import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { VMessageModule } from '../../shared/components/vmessage/vmessage.module';
import { PhotoFormComponent } from './photo-form.component';
import { PhotoComponent } from '../photo/photo.component';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
  declarations: [
    PhotoFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    FormsModule,
    RouterModule,
    PhotoModule
  ]
})
export class PhotoFormModule { }
