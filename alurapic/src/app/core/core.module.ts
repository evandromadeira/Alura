import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ShowIfLoggedModule } from '../shared/directives/show-if-logged/show-if-logged.module';
import { LoadingModule } from '../shared/components/loading/loading.module';
import { AlerteModule } from '../shared/components/alert/alert.module';
import { MenuModule } from '../shared/components/menu/menu.module';
import { RequestInterceptor } from './auth/request.interceptor';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    ShowIfLoggedModule,
    LoadingModule,
    CommonModule,
    RouterModule,
    AlerteModule,
    MenuModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
