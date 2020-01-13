import { Component, OnInit, Input} from '@angular/core';
import {DataDbService} from '../../services/data-db.service';
import {Iuser} from '../../models/user.model';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() userInfo;
  user;
  constructor(
    private dbService : DataDbService,
    private messagesService : MessagesService

  ) { }

  ngOnInit() {
    this.user = this.userInfo
    console.log("INFO", this.userInfo)
  }

  handleRemove(id:string):void{
    this.dbService.removeUser(id)
    this.messagesService.updateMessage({
      type:"userDeleted",
      text:'User was deleted from Data Base.'
    })
  }

}
