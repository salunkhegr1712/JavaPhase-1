import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteListItemComponent } from './note-list-item/note-list-item.component';
import { ShamComponent } from './sham/sham.component';
import { ShamMsgComponent } from './sham-msg/sham-msg.component';


@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteListItemComponent,

    ShamComponent,
     ShamMsgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
