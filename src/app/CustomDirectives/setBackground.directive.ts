import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[setBackground]',
    standalone:true
})
export class SetBackground implements OnInit{
    constructor(private element: ElementRef, private renderer: Renderer2) {}

    // @Input('setBackground') backColor:string = '#36454F';
    // @Input() textColor:string = 'white';

    @Input('setBackground') changeTextAndBackColor: {backColor:string, textColor:string}
    
    ngOnInit(): void {
        // this.element.nativeElement.style.backgroundColor = '#36454F'
        // this.element.nativeElement.style.color = 'white'

        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.changeTextAndBackColor.backColor)
        this.renderer.setStyle(this.element.nativeElement, 'color', this.changeTextAndBackColor.textColor)
    }
}