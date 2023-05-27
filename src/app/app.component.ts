import { Component } from '@angular/core';
import { TransService } from './service/trans.service';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public trans: TransService, public translate: TranslateService){

  }
  title = 'p-lakatos-portfolio';
}
