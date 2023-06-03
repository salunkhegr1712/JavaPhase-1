import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  count=0
  title = 'first-angulat-app';
  klpd=1000
  msdgtogrs="this is secret msg for you ghansham"
  mgz:any
  // we are going to handle the event inside this file 
  handleOutput(n:any){
    this.mgz=document.querySelector("#cont")
    this.mgz.innerText="value received from child is : "+n
    console.log("function inside app compoent ca")
    
  }
  handleChangeCounter(event:number){
    this.count=event
    this.mgz=document.querySelector("#head")
    
  }
}
