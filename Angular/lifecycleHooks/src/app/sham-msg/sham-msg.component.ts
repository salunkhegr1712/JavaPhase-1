import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sham-msg',
  templateUrl: './sham-msg.component.html',
  styleUrls: ['./sham-msg.component.css']
})
export class ShamMsgComponent {
  @Input() message:any;

}
