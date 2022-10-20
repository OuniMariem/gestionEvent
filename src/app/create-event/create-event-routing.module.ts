import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEvComponent } from './create-ev/create-ev.component';

const routes: Routes = [
{path:'', component:CreateEvComponent}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports:[ RouterModule]
})

export class CreateEventRoutingModule { }
