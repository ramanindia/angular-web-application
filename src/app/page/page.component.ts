import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { PageService } from '../page.service';
import { Page } from  '../page';
import { AppGlobals } from '../app.globals';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

pageData: Page[];
  
  constructor(private appGlobals: AppGlobals,private pageService:  PageService, private router: Router, private route: ActivatedRoute)
  { 
	 this.pageData = [];
	 // this.ngOnInit() ; 
	/* this.route.params.subscribe( params => {
		 
	 });*/
     }
  ngOnInit() 
  {
	   this.route.params.subscribe( params => {
		this.pageService.pageData(this.appGlobals.baseAPIUrl,params.slug).subscribe((pageData: Page[])=>
		 {
          this.pageData = pageData;
	     });
	 });
  }

}
