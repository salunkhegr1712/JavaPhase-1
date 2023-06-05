import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivateFn, CanActivateChildFn } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { firstGuard } from './guards/first.guard';
import { secondGuard } from './guards/second.guard';
import { thirdGuard } from './guards/third.guard';

// the guards 
// first -> CanActivate : if true you can access that route
// second -> CanActivateChild : if true we can fetch parent and also its child routes
//third -> candeactivate : if false you cant leave that side from that website you can do it with url

const routes: Routes = [
  {path:'home', component:HomeComponent},
  
  // adding guard inside the app-routingh is easy 
  {path:'about', component:AboutComponent,canActivate:[firstGuard]},
  {path:'blog', component:BlogComponent,canActivateChild:[secondGuard],children:[
    {path:':id',component:BlogDetailsComponent}
  ]},

  // so inside the child we are going to use child routing  
  {path:'users', component:UsersComponent,canDeactivate:[thirdGuard],children:[
    // also adding a default path 
    {
      path:':id',component:UserDetailsComponent
    }
  ]},

  {path:'**', redirectTo:"/home", pathMatch:"full"},
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
