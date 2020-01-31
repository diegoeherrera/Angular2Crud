import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  newMessage:Object;
  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
    this.messagesService.broadCast.subscribe(message=>{
       this.newMessage = message
    })
  }

}
