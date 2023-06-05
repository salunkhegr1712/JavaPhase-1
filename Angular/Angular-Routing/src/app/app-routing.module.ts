import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GhanshamComponent } from './ghansham/ghansham.component';
import { ContactComponent } from './contact/contact.component';
import { SupportComponent } from './support/support.component';

// here we can provide routes 
const routes: Routes = [
  {path:'home',component:GhanshamComponent},
  {path:'contact',component:ContactComponent},
  {path:'support',component:SupportComponent},
  // this code for setting home as main 
  {path:'', redirectTo:'\home',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
