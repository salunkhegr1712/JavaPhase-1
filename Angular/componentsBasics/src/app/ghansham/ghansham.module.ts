import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core/core.component';
import { CoreModule } from './core/core.module';
import { PipePipe } from './pipe.pipe';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    // CoreModule
  ]
})
export class GhanshamModule { }
