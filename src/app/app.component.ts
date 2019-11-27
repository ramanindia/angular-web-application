import { Component } from '@angular/core';

//import { AppGlobals } from './app.globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [ AppGlobals ],
})
export class AppComponent {
  title = 'webapplication';
   constructor(/*private appGlobals: AppGlobals,*/){ }
}
