import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-msg-list',
  templateUrl: './msg-list.component.html',
  styleUrls: ['./msg-list.component.css']
})
export class MsgListComponent {
  @Input() message:any;
}
