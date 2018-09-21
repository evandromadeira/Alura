import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PhotoFormComponent } from './photo-form.component';
import { PhotoComponent } from '../photo/photo.component';

@NgModule({
  declarations: [
    PhotoFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PhotoFormModule { }
