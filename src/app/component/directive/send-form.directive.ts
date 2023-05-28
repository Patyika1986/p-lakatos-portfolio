import { Directive, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appSendForm]'
})
export class SendFormDirective {

  constructor(private router: Router) { }

  @Input({required:true}) mailAnswer: boolean = false;
  @Input({required:true}) mailAnswerWrong: boolean = false;

  @HostListener('click')
  nextFunction() {
    console.log('form send');
  }

}
