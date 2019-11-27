import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {

 constructor(private httpClient: HttpClient) {}
  pageData(BASEAPIURL,PAGESLUG) 
  {
    return this.httpClient.get(BASEAPIURL+"pages?slug="+PAGESLUG);
  }
}
