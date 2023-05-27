import { Component } from '@angular/core';
import { TransService } from 'src/app/service/trans.service';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  constructor(public trans: TransService, public translate: TranslateService){
    translate.addLangs(['en', 'de'])
  }

  switchLang(language: string){
    this.trans.switchLang(language);
  }
}
