import { Component, EventEmitter, Input, Output } from '@angular/core';
import { trigger,state,animate,style,transition, animation } from '@angular/animations';

@Component({
  selector: 'app-ghansham',
  // template:"<h1>hello hii from ghansham.component.ts</h1>",
  // hello hii from ghansham.component.ts
  templateUrl: './ghansham.component.html',
  styleUrls: ['./ghansham.component.css'],
  styles:[
    // you directly do styling from this array 
  ],
  
  // lets add some animations inside the component 
  animations:[]
})


export class GhanshamComponent {
    
  m="a secret msg from ghansham.Component.ts file"
  z=[1,3,4,"ste",true]
  abc=(num:number):string=>{
    console.log("abc function is called")
    
    return `<h3>parametric value passed is :${num}<br> return from abc function</h3>`
  }
  // we will pass image link via Component.ts file 
  source="https://avatars.githubusercontent.com/u/69299458?s=96&v=4"

  text=`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dignissimos dolore quasi perferendis. Beatae quaerat sequi 
  et eligendi nulla obcaecati ea perspiciatis animi fugiat. Aspernatur dicta saepe quo corrupti perspiciatis?`


  // lets handle the input from the root and print it 
  @Input() msg:any;
  @Input() arr:any
  msgFromParent(){
    console.log(this.msg);
    console.log(this.arr)
  }
  
  
  
}
