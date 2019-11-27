import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { FooterService } from '../footer.service';
import { Footer } from  '../footer';
import { AppGlobals } from '../app.globals';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 footerdatas: Footer[];
  constructor(private appGlobals: AppGlobals,private footerService:  FooterService, private router: Router, private route: ActivatedRoute) { 
  	this.footerdatas = [];}

  ngOnInit() {
	    this.footerService.footerdatas(this.appGlobals.baseAPIUrl).subscribe((footerdatas: Footer[])=>{
      this.footerdatas = footerdatas;
    });
  }

}
