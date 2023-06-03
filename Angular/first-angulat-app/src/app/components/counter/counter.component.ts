import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() count:any;
  @Output() changeCounter:EventEmitter<number>=new EventEmitter()

  incrementCount(){
    console.log("count is : "+this.count)
    this.count++
    this.changeCounter.emit(this.count)
  }
  decrementCount(){
    console.log("count is : "+this.count)
    this.count--
    this.changeCounter.emit(this.count)
  }
}
