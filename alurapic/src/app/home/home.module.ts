import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';         
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { SignInComponent } from './signin/signin.component';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    VMessageModule,
    RouterModule
  ]
})
export class HomeModule { }
