import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrontModule } from './front/front.module';
import { WithSideModule } from './with-side/with-side.module';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MarkerService } from './marker.service';
import { PopupService } from './popup.service';
import { ShapeService } from './shape.service';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { ContactIcoComponent } from './contact-ico/contact-ico.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations:[AppComponent, ScrollToTopComponent, ContactIcoComponent, FooterComponent, NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,FrontModule,WithSideModule, MatInputModule,
    HttpClientModule,

  ],
  providers: [
    MarkerService,
    PopupService,
    ShapeService ,
  ],

  bootstrap: [AppComponent]})
export class AppModule { }
