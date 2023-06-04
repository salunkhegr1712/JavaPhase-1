import { AfterViewInit, Component, Input, ViewChild, ViewChildren, Output, QueryList, ContentChild, ContentChildren } from '@angular/core';
import { ShamMsgComponent } from '../sham-msg/sham-msg.component';

@Component({
  selector: 'app-sham',
  templateUrl: './sham.component.html',
  styleUrls: ['./sham.component.css']
})




export class ShamComponent  {

  // only give accces for first child value 
  @ViewChild(ShamMsgComponent) access:any;

  // we have to use ViewChildren in order to grab access for all the values and its Output will be of type querylist

  @ViewChildren(ShamMsgComponent) acc:any;

  massages:Array<String>=[
    "msg1",
    "msg2",
    "msg3"
  ]

  // lets handle content child here
  @ContentChild(ShamMsgComponent) contentone:any;

  //code for contentchildren
  @ContentChildren(ShamMsgComponent) contentAll:any;
  klpd:any

  // using template variable 
  // lets access the template variable 
  @ContentChild("template") grs:any

  // so as parent sending some value let us put some value 
  // we can only change the value inside the child inside the ngafterviewinit function
  ngAfterViewInit(): void {
    // console.log(this.access.message)
    // this.access.message="this is changed"
    // console.log(this.acc)
    this.klpd=this.acc.toArray()

    console.log(this.klpd)

    // lets change everything 
    for(let i=0;i<this.klpd.length;i++){
      this.klpd[i].message=i+"th and value is changed using ViewChildren inside the sham.Component.ts"
    }
    
    // code for contentchild manipulation 
    this.contentone.message="changes value using content child inside ngAfterViewInit inside sham.Component.ts "
    // changes value using content child inside ngAfterViewInit inside sham.Component.ts

    // convert QueryList to Array 
    this.klpd=this.contentAll.toArray()

    for(let i=0;i<this.klpd.length;i++){
      this.klpd[i].message=i+"th and value is changed using ContentChildren from ngafterviewint() inside the sham.Component.ts"
    }
    // output :
    // 0th and value is changed using ContentChildren from ngafterviewint() inside the sham.Component.ts
    // 1th and value is changed using ContentChildren from ngafterviewint() inside the sham.Component.ts
    // 2th and value is changed using ContentChildren from ngafterviewint() inside the sham.Component.ts
    // 3th and value is changed using ContentChildren from ngafterviewint() inside the sham.Component.ts

    this.grs.message="changes value using template using contentchild "
  }


  

  // lets change it 
  

}
