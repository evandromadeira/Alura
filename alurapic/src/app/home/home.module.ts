import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';         
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';
import { HomeRoutingModule } from './home.routing.module';
import { SignUpService } from './signup/signup.service';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    HomeComponent
  ],
  imports: [
    ReactiveFormsModule,
    VMessageModule,
    CommonModule,
    RouterModule,
    FormsModule,
    HomeRoutingModule
  ],
  providers: [
    SignUpService
  ]
})
export class HomeModule { }
