import { Component, OnInit } from '@angular/core';
import { MessagesService } from './services/messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'AngularCRUD';
  message:Object;
  constructor(private messagesService: MessagesService ){}

  ngOnInit(){
    this.messagesService.broadCast.subscribe(message=>{
      console.log("from appComponent: ",message)
      return this.message = message
    })
  }
}
