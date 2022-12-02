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
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';

import { FormsModule } from '@angular/forms';
import { AddformulaireComponent } from './addformulaire/addformulaire.component';
import { AddPostComponent } from './add-post/add-post.component';


@NgModule({
  declarations:[AppComponent, ScrollToTopComponent, ContactIcoComponent, FooterComponent, NavBarComponent, AddPostComponent, AddformulaireComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,WithSideModule, MatInputModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),FormsModule

  ],
  providers: [
    MarkerService,
    PopupService,
    ShapeService ,
    
  ],

  bootstrap: [AppComponent]})
export class AppModule { }
