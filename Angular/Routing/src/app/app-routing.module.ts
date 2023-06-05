import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'blog', component:BlogComponent,children:[
    {path:':id',component:BlogDetailsComponent}
  ]},

  // so inside the child we are going to use child routing  
  {path:'users', component:UsersComponent,children:[
    // also adding a default path 
    {
      path:':id',component:UserDetailsComponent
    }

  ]},

  {path:'**', redirectTo:"/home", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
