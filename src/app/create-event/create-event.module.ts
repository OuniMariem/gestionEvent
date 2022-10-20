import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { CreateEventRoutingModule } from './create-event-routing.module';
import { CreateEvComponent } from './create-ev/create-ev.component';
import{ MatDatepickerModule } from '@angular/material/datepicker';
import{ MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    CreateEvComponent
  ],
  imports: [
    CommonModule,
     CreateEventRoutingModule,
     MatFormFieldModule ,
     MatIconModule,
     MatInputModule,
    MatDatepickerModule ,MatNativeDateModule ,MatSelectModule
  ]
})
export class CreateEventModule { }
