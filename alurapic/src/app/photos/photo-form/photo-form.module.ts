import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VMessageModule } from '../../shared/components/vmessage/vmessage.module';
import { PhotoFormComponent } from './photo-form.component';
import { PhotoComponent } from '../photo/photo.component';

@NgModule({
  declarations: [
    PhotoFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    FormsModule
  ]
})
export class PhotoFormModule { }
