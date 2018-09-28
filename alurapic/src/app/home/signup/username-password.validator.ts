import { ValidatorFn, FormGroup } from '@angular/forms';

export const userNamePasswordValidator: ValidatorFn = (formGroup: FormGroup) => {
  const userName = formGroup.get('userName').value;
  const password = formGroup.get('password').value;

  return (userName.trim() + password.trim() && userName == password) ? { userNamePasswordValidator: true } : null;
}
