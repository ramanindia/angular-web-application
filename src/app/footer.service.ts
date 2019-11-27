import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

    constructor(private httpClient: HttpClient) {}
	footerdatas(BASEAPIURL) 
  {
    return this.httpClient.get(BASEAPIURL+"pages/107");
  }
}
