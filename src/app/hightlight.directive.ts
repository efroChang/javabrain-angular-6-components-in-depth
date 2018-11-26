import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  @Input()
  color: string = "yellow"; // Add default color

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter')
  addHighlight() {
    this.element.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseleave')
  removeHighlight() {
    this.element.nativeElement.style.backgroundColor = null;
  }
}
