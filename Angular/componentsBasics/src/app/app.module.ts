import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GhanshamComponent } from './ghansham/ghansham.component';
import { PipePipe } from './ghansham/pipe.pipe';
import { DirDirective } from './ghansham/dir.directive';
import { CoreComponent } from './ghansham/core/core.component';
import { JcComponent } from './jc/jc.component';
import { JcbComponent } from './jc/jcb/jcb.component';
import { HekkComponent } from './jc/jcb/hl/hekk/hekk.component';

@NgModule({
  declarations: [
    AppComponent,
    GhanshamComponent,
    PipePipe,
    DirDirective,CoreComponent,JcComponent,JcbComponent,HekkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
