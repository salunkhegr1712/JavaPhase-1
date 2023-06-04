import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MsgListComponent } from './msg-list/msg-list.component';
import { MainMsgComponent } from './main-msg/main-msg.component';

@NgModule({
  declarations: [
    AppComponent,
    MsgListComponent,
    MainMsgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
