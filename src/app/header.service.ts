import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

   constructor(private httpClient: HttpClient) {}
  headerdatas(BASEAPIURL) 
  {
    return this.httpClient.get(BASEAPIURL+"pages/60");
  }
}
