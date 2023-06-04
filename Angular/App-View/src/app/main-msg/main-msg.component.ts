import { Component, ViewChild, ViewChildren, ContentChild, ContentChildren } from '@angular/core';
import { MsgListComponent } from '../msg-list/msg-list.component';

@Component({
  selector: 'app-main-msg',
  templateUrl: './main-msg.component.html',
  styleUrls: ['./main-msg.component.css']
})
export class MainMsgComponent {
  data="this is data block from main-msg.Component.ts"

  // lets manipulate the using ViewChild
  @ViewChild(MsgListComponent) singleviewchild:any;
  @ViewChild("klpd3") getBytemplateviewchild:any;
  @ViewChildren(MsgListComponent) getallviewchild:any;

  

  // lets manipulate content ContentChildld
  @ContentChild(MsgListComponent) singlecontenchild:any;
  @ContentChild("block1") getBytemplatecontentchild:any;
  @ContentChildren(MsgListComponent) getallcontentchild:any;

  // experiment 
  @ContentChildren("block1") a:any

  // we cant manipulate view child and ContentChild
  ngAfterViewInit(){
    this.singleviewchild.message="we change value using ViewChild and get first value and change it"
    this.getBytemplateviewchild.message="changes using template id and and ViewChild class"

    this.getallviewchild=this.getallviewchild.toArray()
    this.getallviewchild[1].message="changes value using ViewChildren"


    this.singlecontenchild.message="we change value using contentChild and get first value and change it"
    this.getBytemplatecontentchild.message="changes using template id and and contentChild class"

    this.getallcontentchild=this.getallcontentchild.toArray()
    this.getallcontentchild[1].message="changes value using contentChildren"

    console.log(this.a)
  }
}
