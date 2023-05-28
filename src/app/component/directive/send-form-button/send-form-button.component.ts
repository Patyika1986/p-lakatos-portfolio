import { Component, Input } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { MailjsService } from 'src/app/service/mailjs.service';
@Component({
  selector: 'app-send-form-button',
  templateUrl: './send-form-button.component.html',
  styleUrls: ['./send-form-button.component.scss'],
})
export class SendFormButtonComponent {
  constructor(private mailjsService: MailjsService){

  }
  @Input({ required: true }) formsvalue: any;



    sendEmail() {



    



    
    // emailjs.init('EKtyhqg0Z1xoifBXK');

    // let params = {
    //   from_name: this.formsvalue.name,
    //   email_id: this.formsvalue.email,
    //   message: this.formsvalue.message,
    // };

    // try {
    //   const mail = await emailjs.send(
    //     'service_ih56a6r',
    //     'template_cosztd9',
    //     params
    //   );
    //   this.formsvalue.reset();
    // } catch (err) {
    //   console.log(err);
    // }
    


    


  }
}
