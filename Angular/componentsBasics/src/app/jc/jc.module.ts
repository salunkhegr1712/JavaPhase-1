import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JcComponent } from './jc.component';
import { JcbComponent } from './jcb/jcb.component';
import { JcbPipe } from './jcb.pipe';
import { JcbDirective } from './jcb.directive';
import { HekkComponent } from './jcb/hl/hekk/hekk.component';



@NgModule({
  declarations: [
    JcComponent,
    JcbComponent,
    JcbPipe,
    JcbDirective,

  ],
  imports: [
    CommonModule
  ]
})
export class JcModule { }
