import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

constructor(private httpClient: HttpClient) {}
  contactData(BASEAPIURL) 
  {
    return this.httpClient.get(BASEAPIURL+"pages/168");
  }
}
