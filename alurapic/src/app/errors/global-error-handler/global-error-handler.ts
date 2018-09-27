import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import * as StackTrace from 'stacktrace-js';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment.prod';
import { UserService } from '../../core/user/user.service';
import { ServerLogService } from './server-log.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(
    private injector: Injector
  ) { }

  handleError(error: any): void {

    const message = error.message ? error.message : error.toString();
    const serverLogService = this.injector.get(ServerLogService);
    const location = this.injector.get(LocationStrategy);
    const userService = this.injector.get(UserService);
    const url = location instanceof PathLocationStrategy ? location.path() : '';
    const router = this.injector.get(Router);

    if (environment.production) router.navigate(['/error']);

    StackTrace
      .fromError(error)
      .then(stackFrames => {
        const stackAsString = stackFrames
          .map(sf => sf.toString())
          .join('\n');

        console.log(message);
        console.log(stackAsString);
        serverLogService.log({
              message,
              url,
              userName: userService.getUserName(),
              stack: stackAsString})
          .subscribe(
          () => {
            console.log('Error logged on server!');
          },
          err => {
            console.log(err);
            console.log('Fail to send error log to server!');
          })
      });
  }
}
