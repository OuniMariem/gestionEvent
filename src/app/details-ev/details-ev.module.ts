import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsEvRoutingModule } from './details-ev-routing.module';
import { DetailEveComponent } from './detail-eve/detail-eve.component';


@NgModule({
  declarations: [
    DetailEveComponent
  ],
  imports: [
    CommonModule,
    DetailsEvRoutingModule
  ]
})
export class DetailsEvModule { }
