import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'environments/environment';
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

  public mailValide: boolean = false;
  public mailInvalid: boolean = false;
  public sendEMail: string = 'Send E-Mail Status';
  public sendEmailText: string = '';

  async isFormValide() {
    if (this.form.status === 'VALID') {
      this.sendEmailText = 'Send E-mail was succesfully !';
      emailjs.init(environment.apiKey);

      let params = {
        from_name: this.form.value.name,
        email_id: this.form.value.email,
        message: this.form.value.message,
      };

      try {
        const mail = await emailjs.send(
          environment.service,
          environment.template,
          params
        );

        this.form.reset();
      } catch (err) {
        console.log(err);
      }
    } else {
      this.sendEmailText =
        'Send E-mail was not successfully, Something went Wrong pleas try it again !';
    }
  }
}
