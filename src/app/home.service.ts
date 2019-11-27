import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService 
{
  constructor(private httpClient: HttpClient) {}
  homeData(BASEAPIURL) 
  {
    return this.httpClient.get(BASEAPIURL+"pages/29");
  }
  portfolioData(BASEAPIURL) 
  {
	return this.httpClient.get(BASEAPIURL+"portfolio?per_page=4");
  }
  teamData(BASEAPIURL) 
  {
	return this.httpClient.get(BASEAPIURL+"team");
  }
  
   testiminialData(BASEAPIURL) 
  {
	return this.httpClient.get(BASEAPIURL+"testimonial/");
  }
   blogData(BASEAPIURL) 
  {
	return this.httpClient.get(BASEAPIURL+"posts?per_page=3");
  }
}
