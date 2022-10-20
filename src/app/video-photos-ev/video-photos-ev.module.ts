import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoPhotosEvRoutingModule } from './video-photos-ev-routing.module';
import { VideoPhoEvComponent } from './video-pho-ev/video-pho-ev.component';


@NgModule({
  declarations: [
    VideoPhoEvComponent
  ],
  imports: [
    CommonModule,
    VideoPhotosEvRoutingModule
  ]
})
export class VideoPhotosEvModule { }
