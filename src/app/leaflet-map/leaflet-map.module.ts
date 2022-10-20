import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletMapRoutingModule } from './leaflet-map-routing.module';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    LeafletMapRoutingModule
  ]
})
export class LeafletMapModule { }
