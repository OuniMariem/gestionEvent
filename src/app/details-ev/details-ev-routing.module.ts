import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailEveComponent } from './detail-eve/detail-eve.component';

const routes: Routes = [
  {path:'' ,component:DetailEveComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsEvRoutingModule { }
