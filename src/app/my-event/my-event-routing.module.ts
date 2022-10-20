import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyEvComponent } from './my-ev/my-ev.component';

const routes: Routes = [
  {path:'' ,component:MyEvComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyEventRoutingModule { }
