import { Directive, ElementRef, Renderer, OnInit } from '@angular/core';

import { UserService } from '../../../core/user/user.service';

@Directive({
  selector: '[showIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit {

  currenteDisplay: string;

  constructor(
    private elementRef: ElementRef<any>,
    private renderer: Renderer,
    private userService: UserService
  ) { }

  ngOnInit(): void {

    this.currenteDisplay = getComputedStyle(this.elementRef.nativeElement).display;
    this.userService.getUser()
      .subscribe(user => {
        if (user) {
          this.renderer.setElementStyle(this.elementRef.nativeElement, 'display', this.currenteDisplay);
        } else {
          this.currenteDisplay = getComputedStyle(this.elementRef.nativeElement).display;
          this.renderer.setElementStyle(this.elementRef.nativeElement, 'display', 'none');
        }
      });
  }
}
