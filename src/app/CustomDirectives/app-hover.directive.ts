import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true
})
export class AppHoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostBinding('style.backgroundColor') backgroundColor: string = '#28282B';
  @HostBinding('style.border') border: string = 'none'
  @HostBinding('style.color') textColor: string = 'white'

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'pink';
    this.border = '#28282B 2px solid'
    this.textColor = '#28282B'
  }

  @HostListener('mouseout') onMouseOut() {
    this.backgroundColor = '#28282B';
    this.border = 'none'
    this.textColor = 'white'
  }


}
