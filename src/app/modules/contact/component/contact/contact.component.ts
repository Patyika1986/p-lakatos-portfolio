import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(private formBuilder: FormBuilder) {}

  form = this.formBuilder.group({
    name: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25),
      ]),
    ],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    message: ['', Validators.compose([Validators.required])],
  });
}
