import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  @Input() counter:number;
  constructor(){

    // this name matters 
    this.counter=Input()
  }
  // the about inputname+Change should be name of event emi
  @Output() counterChange: EventEmitter<number> = new EventEmitter<number>()

  changeCount(ss: string) {
    if (ss === "inc") {
      this.counter++
      console.log("count is : " + this.counter)
      this.counterChange.emit(this.counter)
      return
    }
    this.counter--
    console.log("count is : " + this.counter)
    this.counterChange.emit(this.counter)
  }
}
