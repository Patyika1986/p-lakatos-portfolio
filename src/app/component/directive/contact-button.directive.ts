import { Directive, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appContactButton]',
})
export class ContactButtonDirective {
  constructor(private router: Router) {}

  @HostListener('click')
  nextFunction() {
    console.log('run');
    this.router.navigate(['contact-overview'])
  }
}
