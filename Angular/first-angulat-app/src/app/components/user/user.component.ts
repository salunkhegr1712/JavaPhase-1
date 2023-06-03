import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class UserComponent {
  text=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, tenetur ipsa ullam voluptates 
  voluptate rem earum cumque culpa, 
  officiis blanditiis perspiciatis aliquam repudiandae, animi delectus? Dolor ullam voluptatum commodi ratione!`
}
