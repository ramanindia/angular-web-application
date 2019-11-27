import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
//Add global varibale file 
import { AppGlobals } from './app.globals';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { PageComponent } from './page/page.component';


 //import {EscapeHtmlPipe} from './components/pipes/escape-html.pipe';
 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    HomeComponent,
    FooterComponent,
    AboutusComponent,
    ServicesComponent,
    ContactComponent,
    PageComponent
	//EscapeHtmlPipe
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
	AppRoutingModule,
	HttpClientModule,
	CarouselModule
  ],
  providers: [ AppGlobals ],
  bootstrap: [AppComponent]
})
export class AppModule {
	}
