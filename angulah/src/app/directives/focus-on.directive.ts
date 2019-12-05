import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[focusOn]' })
export class FocusOnDirective {
	constructor(private el: ElementRef) {}

	@HostListener('click')
	mouseclick() {
		console.log('hoi!');
		this.el.nativeElement.style.backgroundColor = 'purple';
	}

	@Input() set focusOn(condition: boolean) {
		if (condition) {
			this.el.nativeElement.focus();
		}
	}
}
