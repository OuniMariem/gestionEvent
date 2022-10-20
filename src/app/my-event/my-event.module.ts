import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyEventRoutingModule } from './my-event-routing.module';
import { MyEvComponent } from './my-ev/my-ev.component';
import {MatInputModule} from '@angular/material/input';
import{ MatDatepickerModule } from '@angular/material/datepicker';
import{ MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatTabsModule}from '@angular/material/tabs'

@NgModule({
  declarations: [
    MyEvComponent,
  ],
  imports: [
    CommonModule,
    MyEventRoutingModule,MatInputModule,MatDatepickerModule,
    MatNativeDateModule,MatIconModule,MatFormFieldModule,MatTabsModule

   
  ]
})
export class MyEventModule { }
