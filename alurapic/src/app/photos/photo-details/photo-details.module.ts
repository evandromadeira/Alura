import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-only.directive';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { VMessageModule } from '../../shared/components/vmessage/vmessage.module';
import { PhotoDetailsComponent } from './photo-details.component';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
  declarations: [
    PhotoOwnerOnlyDirective,
    PhotoCommentsComponent,
    PhotoDetailsComponent
  ],
  exports: [
    PhotoCommentsComponent,
    PhotoDetailsComponent
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
