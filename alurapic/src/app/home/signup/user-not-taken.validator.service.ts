import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

import { debounceTime, switchMap, map, first } from 'rxjs/operators';
import { SignUpService } from './signup.service';

@Injectable({
  providedIn: 'root'
})
export class UserNotTakenValidatorService {

  constructor(private signUpService: SignUpService) { }

  checkUserNameTaken() {

    return (control: AbstractControl) => {
      return control
        .valueChanges
        .pipe(debounceTime(300))
        .pipe(switchMap(userName =>
          this.signUpService.checkUserNameTaken(userName)
        ))
        .pipe(map(isTaken => isTaken ? { userNameTaken: true } : null))
        .pipe(first());
    }
  }
}
