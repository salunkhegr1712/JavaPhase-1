import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  placeholderMsg="press enter to see magic"
  m:any;
  z=1;
  klpd:any;
  // the event will invoked from the html and handles inside the Component typescriptfile 
  handleClick(){

    this.klpd=localStorage.getItem("hell")
   
    if(this.klpd!=null){
      this.klpd=JSON.parse(this.klpd)
      this.z=this.klpd
    }
    else{
      this.z=1
    }

    
    console.log("clicked and event invoked")
    this.m=document.querySelector("#sham")
    this.m.innerText="thanks for clicking clicked "+`${this.z}`+" times!"
    this.z++;

    localStorage.setItem("hell",JSON.stringify(this.z))    
  }
  // lets add a eventlistener for input 
  mg:any;ttt:any
  // we getting event that caused this problem 
  manageChange(event:any){
    this.mg=document.querySelector("#ghansham")
    this.ttt=document.querySelector(".ttbb")
    console.log(event.key)
    if(event.keyCode==13){
      this.ttt.innerText=this.mg.value
      this.mg.value=""
    }

  }
}
