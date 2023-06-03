import { NgModule, Output } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GhanshamComponent } from './components/ghansham/ghansham.component';
import { UserComponent } from './components/user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { InputOutputComponent } from './components/input-output/input-output.component';
import { CounterComponent } from './components/counter/counter.component';


@NgModule({
  declarations: [
    AppComponent,
    GhanshamComponent,
    UserComponent,
    EventBindingComponent,InputOutputComponent, CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  
  // we want to sent this value to the InputOutputComponent
 
  
 }
