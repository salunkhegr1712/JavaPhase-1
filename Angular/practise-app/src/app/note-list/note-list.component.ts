import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
// class NoteItem{
//   title:string
//   constructor(title:string){
//     this.title=title;
//   }
// }

export class NoteListComponent {
  
  obj:Array<string>=[]
  mk:any
  kl:any
  d:boolean=true
  addNotes(event:any){
    this.kl=document.querySelector("#ghansham")
    if(event.keyCode===13){
        this.mk=this.kl.value
        this.kl.value=""
        this.obj.push(this.mk)
    }
    // console.log(this.obj)
  }
  deleteNote(input:string){
    this.obj.splice(this.obj.indexOf(input),1)
  }

  changeFirst(){
    this.obj[0]="changed"
  }

  somechange(){
    this.d=this.d?true:false
    console.log(this.d)
  }
}
