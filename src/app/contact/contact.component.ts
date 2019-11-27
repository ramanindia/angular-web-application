import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactUsService } from '../contact-us.service';
import { Contact } from  '../contact';
import { AppGlobals } from '../app.globals';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	contactData: Contact[];

  constructor(private appGlobals: AppGlobals,private contactUsService:  ContactUsService, private router: Router, private route: ActivatedRoute) 
  {
        this.contactData = [];
}

  ngOnInit() {
	  	this.contactUsService.contactData(this.appGlobals.baseAPIUrl).subscribe((contactData: Contact[])=>
		 {
          this.contactData = contactData;
	     });
  }

}
