import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoPhoEvComponent } from './video-pho-ev/video-pho-ev.component';

const routes: Routes = [
  {path:'',component:VideoPhoEvComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoPhotosEvRoutingModule { }
