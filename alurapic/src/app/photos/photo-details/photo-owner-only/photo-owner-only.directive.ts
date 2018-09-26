import { Directive, Input, Renderer, OnInit, ElementRef } from '@angular/core';

import { UserService } from '../../../core/user/user.service';
import { Photo } from '../../photo/photo';

@Directive({
  selector: '[photoOwnerOnly]'
})
export class PhotoOwnerOnlyDirective implements OnInit {

  @Input() ownedPhoto: Photo;

  constructor(
    private elementRef: ElementRef<any>,
    private renderer: Renderer,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService
      .getUser()
      .subscribe(user => {
        if (!user || user.id != this.ownedPhoto.userId) {
          this.renderer.setElementStyle(this.elementRef.nativeElement, 'display', 'none');
        }
      });
  }
}
