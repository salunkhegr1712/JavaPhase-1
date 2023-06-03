import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  @Input() counter:any;

  @Output() counterChange:EventEmitter<number>=new EventEmitter()


  handler(ss:string){
    if(ss==="d"){
      this.counter++
    }
    else{

      this.counter--
    }
    this.counterChange.emit(this.counter)

  }

} 
