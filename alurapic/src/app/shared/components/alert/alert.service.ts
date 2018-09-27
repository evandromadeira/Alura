import { Router, NavigationStart } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Alert, AlertType } from './alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alertSubject: Subject<Alert> = new Subject<Alert>();
  keepAlertRouteChange = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAlertRouteChange) {
          this.keepAlertRouteChange = false;
        } else {
          this.clear();
        }
      }
    });
  }

  success(message: string, keepAlertRouteChange: boolean = false) {
    this.alert(AlertType.SUCCESS, message, keepAlertRouteChange);
  }

  info(message: string, keepAlertRouteChange: boolean = false) {
    this.alert(AlertType.INFO, message, keepAlertRouteChange);
  }

  warning(message: string, keepAlertRouteChange: boolean = false) {
    this.alert(AlertType.WARNING, message, keepAlertRouteChange);
  }

  danger(message: string, keepAlertRouteChange: boolean = false) {
    this.alert(AlertType.DANGER, message, keepAlertRouteChange);
  }

  private alert(alertType: AlertType, message: string, keepAlertRouteChange: boolean) {
    this.keepAlertRouteChange = keepAlertRouteChange;
    this.alertSubject.next(new Alert(alertType, message));
  }

  getAlert() {
    return this.alertSubject.asObservable();
  }

  clear() {
    this.alertSubject.next(null);
  }
}
