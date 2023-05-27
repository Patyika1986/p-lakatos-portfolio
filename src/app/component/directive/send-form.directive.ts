import { Directive, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appSendForm]'
})
export class SendFormDirective {

  constructor(private router: Router) { }

  @HostListener('click')
  nextFunction() {
    console.log('form send');
  }

}
