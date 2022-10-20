import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithSideRoutingModule } from './with-side-routing.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ContainerComponent } from './container/container.component';
import{ MatDatepickerModule } from '@angular/material/datepicker';
import{ MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    SideBarComponent,
    ContainerComponent,
  ],
  imports: [
    CommonModule,
    WithSideRoutingModule,MatDatepickerModule,MatNativeDateModule,MatInputModule,MatSelectModule
  ]
})
export class WithSideModule { }
