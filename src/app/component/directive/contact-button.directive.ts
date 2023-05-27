import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appContactButton]'
})
export class ContactButtonDirective {

  constructor(private element: ElementRef) { }

  @HostListener('click')
  nextFunction() {
    console.log('run');
  }

}


