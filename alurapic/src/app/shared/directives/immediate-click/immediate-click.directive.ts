import { Directive, ElementRef, OnInit } from '@angular/core';

import { PlatformDetectorService } from '../../../core/platform-detector/platform-detecor.service';


@Directive({
  selector: '[immediateClick]'
})
export class ImmediateClickDirective implements OnInit {

  constructor(
    private element: ElementRef<any>,
    private platformDetectorService: PlatformDetectorService) { }

  ngOnInit(): void {
    this.platformDetectorService.isPlatformBrowser &&
      this.element.nativeElement.click();
  }
}
