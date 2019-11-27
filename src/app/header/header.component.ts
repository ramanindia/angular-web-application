import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { HeaderService } from '../header.service';
import { Header } from  '../header';
import { AppGlobals } from '../app.globals';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {

  headerdatas: Header[];
  
  constructor(private appGlobals: AppGlobals,private headerService:  HeaderService, private router: Router, private route: ActivatedRoute)
  { 
	this.headerdatas = [];
	
  }
  ngOnInit() {
	   this.headerService.headerdatas(this.appGlobals.baseAPIUrl).subscribe((headerdatas: Header[])=>{
      this.headerdatas = headerdatas;
    });
  }

}



