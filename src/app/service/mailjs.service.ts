import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailjsService {

  constructor(private http: HttpClient) { }

  sendMessage(body: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    };
    return this.http.post('http://localehost:3000/mail', body, header);
  }
}
