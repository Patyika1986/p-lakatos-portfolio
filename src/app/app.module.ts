import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './component/overview/overview.component';
import { NavComponent } from './modules/nav/component/nav/nav.component';

// i18n and translate core
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContentComponent } from './component/content/content.component';
import { ContactButtonDirective } from './component/directive/contact-button.directive';
import { ContactButtonComponent } from './component/directive/contact-button/contact-button.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    NavComponent,
    ContentComponent,
    ContactButtonDirective,
    ContactButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderr,
        deps: [HttpClient],
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function httpTranslateLoaderr(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
