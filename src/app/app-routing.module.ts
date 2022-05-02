import { viewClassName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { InsertComponent } from './insert/insert.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:"insert",component:InsertComponent},
  {path:"view",component:ViewComponent},
  {path:"home",component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
