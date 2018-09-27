import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { LoadingType } from './loading.type';
import { startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  //private loadingSubject: Subject<LoadingType> = new Subject<LoadingType>();
  private loadingSubject = new Subject<LoadingType>();

  getLoading() {
    return this.loadingSubject
      .asObservable()
      .pipe(startWith(LoadingType.STOPPED));
  }

  startLoading() {
    this.loadingSubject.next(LoadingType.LOADING);
  }

  stopLoading() {
    this.loadingSubject.next(LoadingType.STOPPED);
  }
}
