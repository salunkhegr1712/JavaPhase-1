// see this code 

import { trigger } from '@angular/animations';
import {
  Input,
  Output,
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  EventEmitter,
  ChangeDetectionStrategy,
  SimpleChanges,
  SimpleChange,
} from "@angular/core";

@Component({
  selector: 'app-note-list-item',
  templateUrl: './note-list-item.component.html',
  styleUrls: ['./note-list-item.component.css']
})
export class NoteListItemComponent implements DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,
AfterViewInit,OnInit,OnChanges {
  @Input() obj:any;
  @Output() trigger:EventEmitter<string>=new EventEmitter()
  k:any
  // lets display a timer 
  m=0
  klpd:any
  stop=false
  // lets print the elements inside the html 
  // lets display topic 
  display(){
    
  }
  handleDeleteClick(){
    this.trigger.emit(this.obj)
    this.ngDestroy()
  }

  // these all lifecycle hooks are interface so we have to implements function inside it 

  // so lets see working of the lifecycle hooks inside this file 
  // as we know the first time the constructor will be called 
  constructor(){

    console.log('%cthe constructor is called', 'color: red; background: white; font-size: 20px')
  }

  // -------------------------- avoid using it --------------------------------------
  // after constructor ngonchanges get invoked  only detect Input related changes
  // changes is of class called SimpleChange which show what content ischanged 
  ngOnChanges(changes:SimpleChanges){
    console.log('%cthe ngOnchanges called  \n', 'color: green; background: white; font-size: 20px')
    console.log(changes)
    
  }
  // ex :
  // {obj: SimpleChange}
  // obj: SimpleChange
  // currentValue: "fdds"
  // firstChange: true
  // previousValue: undefined

  
  // after that ngoninit called 
  ngOnInit(){
    console.log('%cthe ngOnInit is called', 'color: purple; background: white; font-size: 20px')

    this.klpd=setInterval(()=>{
      // lets increse timer 
      if(!this.stop){
        this.m++
        console.log("timer is "+this.m)
      }
      else{
        return;
      }
    },1000)
  }

  // after ngOnCheck() detect all changes
  // run each type after angular detect any change
  // -------------------------- avoid using it --------------------------------------
  ngDoCheck(){
    console.log('%cthe ngDoCheck is called', 'color: red; background: black; font-size: 20px')
  }

  // after this ngAfterContentinit() take place after content projection
  //only runs once after ngOnInit
  // -------------------------- avoid using it --------------------------------------
  ngAfterContentInit(){
    
    console.log('%cthe ngOnContentInit is called', 'color: blue; background: white; font-size: 20px')
  }

  // then ngAfterContentChecked
  // -------------------------- avoid using it --------------------------------------
  ngAfterContentChecked(){
    console.log('%cthe ngAfterContentChecked is called', 'color: pink; background: black; font-size: 20px')
  }

  // then ngAfterContentChecked
  // runs only once 
  ngAfterViewInit(){
    console.log('%cthe ngAfterViewInit is called', 'color: brown; background: white; font-size: 20px')
  }

  // then ngAfterContentChecked
  // run everytime after ngAfterContentChecked runs
  // -------------------------- avoid using it --------------------------------------
  ngAfterViewChecked(){
    console.log('%cthe ngAfterViewChecked is called', 'color: lavender; background: black; font-size: 20px')
  }

  // // and last one and it only runs once 
  ngDestroy(){
    // so we have to stop timer that is this.klpd

    // this.stop=true
    // this will stop timer 

    // or also we can use clearInterval function
    clearInterval(this.klpd)
    console.log("ngDestroy stoped timer")
  
  }
  // these all are interfaces 
}
