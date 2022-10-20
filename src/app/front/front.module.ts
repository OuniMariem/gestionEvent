import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CreatComptComponent } from './creat-compt/creat-compt.component';
import { AboutComponent } from './about/about.component';
import { TopAgencyComponent } from './top-agency/top-agency.component';
import { DescriptionTopAgencyComponent } from './description-top-agency/description-top-agency.component';
import { Home1Component } from './home1/home1.component';
import{ MatDatepickerModule } from '@angular/material/datepicker';
import{ MatInputModule } from '@angular/material/input';
import{ MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    HomeComponent,
    CreatComptComponent,
    AboutComponent,
    TopAgencyComponent,
    DescriptionTopAgencyComponent,Home1Component,
  ],
  imports: [
    CommonModule,MatDatepickerModule,MatInputModule,MatNativeDateModule,MatCardModule,RouterModule
  ]
})
export class FrontModule { }
