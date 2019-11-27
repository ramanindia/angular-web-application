import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeService } from '../home.service';
import { Home } from  '../home';
import { AppGlobals } from '../app.globals';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeData: Home[];
  portfolioData: Home[];
  blogData: Home[];
 teamData: Home[];
  testiminialData: Home[];
    customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
	  margin: 30,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 300,
    navText: ['', ''],
	 nav: true,
    responsive: {
      0: {
        items: 1
      },
      /*400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }*/
    },

  }
  constructor(private appGlobals: AppGlobals,private homeService:  HomeService, private router: Router, private route: ActivatedRoute) 
  {
	this.homeData = [];
	this.portfolioData = [];
	this.blogData=[];
	this.teamData = [];
	this.testiminialData = [];
  }

  ngOnInit() 
  {
	   this.homeService.homeData(this.appGlobals.baseAPIUrl).subscribe((homeData: Home[])=>{
      this.homeData = homeData;
    });
	
	 this.homeService.portfolioData(this.appGlobals.baseAPIUrl).subscribe((portfolioData: Home[])=>{
      this.portfolioData = portfolioData;
    });
	
	 this.homeService.teamData(this.appGlobals.baseAPIUrl).subscribe((teamData: Home[])=>{
      this.teamData = teamData;
    });
	
	 this.homeService.testiminialData(this.appGlobals.baseAPIUrl).subscribe((testiminialData: Home[])=>{
      this.testiminialData = testiminialData;
    });
	
	 this.homeService.blogData(this.appGlobals.baseAPIUrl).subscribe((blogData: Home[])=>{
      this.blogData = blogData;
    });
  }

}
