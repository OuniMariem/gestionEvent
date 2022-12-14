import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatComptComponent } from './front/creat-compt/creat-compt.component';
import { DescriptionTopAgencyComponent } from './front/description-top-agency/description-top-agency.component';
import { HomeComponent } from './front/home/home.component';
import { TopAgencyComponent } from './front/top-agency/top-agency.component';
import { SideBarComponent } from './with-side/side-bar/side-bar.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AddformulaireComponent } from './addformulaire/addformulaire.component';
import { AboutComponent } from './about/about.component';
import { Home1Component } from './home1/home1.component';
//import { AddformulaireComponent } from './addformulaire/addformulaire.component';


const routes: Routes = [
{path:'',component:HomeComponent},
{path: 'creatCompt' ,component:CreatComptComponent},
{path: 'about' ,component:AboutComponent},
{path: 'topAgency' ,component:TopAgencyComponent},
{path: 'descriptionTopAgency' ,component:DescriptionTopAgencyComponent},
{path: 'home1' ,component:Home1Component},
{path: 'side' ,component:SideBarComponent,children:[
  {path:'container',loadChildren:()=>import('../app/with-side/with-side.module').then(m=>m.WithSideModule)}
]}
,{path: 'side' ,component:SideBarComponent,children:[
  {path:'createEv',loadChildren:()=>import('../app/create-event/create-event.module').then(m=>m.CreateEventModule)}
]},
{path:'side' ,component:SideBarComponent,children:[
  {path:'myEv' ,loadChildren:()=>import('../app/my-event/my-event.module').then(m=>m.MyEventModule)}
]},
{path: 'side',component:SideBarComponent,children:[
  {path:'videoPhoEv' ,loadChildren:()=>import('../app/video-photos-ev/video-photos-ev.module').then(m=>m.VideoPhotosEvModule)}
]},
{path:'side', component:SideBarComponent,children:[
  {path:'detailEve' ,loadChildren:()=>import('../app/details-ev/details-ev.module').then(m=>m.DetailsEvModule)}
]},
{path:'addPost', component:AddPostComponent},
{path:'addformulaire', component:AddformulaireComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule
  ]
})
export class AppRoutingModule { }
