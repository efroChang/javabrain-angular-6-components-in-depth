import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter')
  addHighlight() {
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave')
  removeHighlight() {
    this.element.nativeElement.style.backgroundColor = null;
  }
}
