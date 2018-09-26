import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { VMessageModule } from '../../shared/components/vmessage/vmessage.module';
import { PhotoDetailsComponent } from './photo-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
  declarations: [
    PhotoDetailsComponent,
    PhotoCommentsComponent
  ],
  exports: [
    PhotoDetailsComponent,
    PhotoCommentsComponent
  ],
  imports: [
    ReactiveFormsModule,
    VMessageModule,
    CommonModule,
    RouterModule,
    PhotoModule
  ]
})
export class PhotoDetailsModule { }
