import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrls: ['./attribute-binding.component.css']
})

export class AttributeBindingComponent {
  val=true

  // so we have to manage it 
  mod(){
    if (this.val===true ) 
        this.val=false
    else
      this.val=true
  }

}
