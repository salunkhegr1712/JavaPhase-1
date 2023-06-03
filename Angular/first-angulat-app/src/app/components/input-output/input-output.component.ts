import { Component, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})


export class InputOutputComponent {

  // so as we taken input from the parent lets send some event to parent 
  @Output() newEvent:EventEmitter<number>=new EventEmitter()

  @Input() klpd:any;

  // let call function and see input value 
  inputVal(){
    console.log(this.klpd)
  }

  // for sending output there should be some event 
  triggerToOutput(){
    // now we are emiting some value which will captured by parent 
    this.newEvent.emit(10000)
    console.log("event emitted")
  }
}
