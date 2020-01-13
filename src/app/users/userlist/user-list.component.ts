import { Component, OnInit } from '@angular/core';
import {DataDbService} from '../../services/data-db.service';
import {Iuser} from '../../models/user.model';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {

  loading = true;
  users:Iuser[];
  openModal:boolean=false;
  editInfo:Iuser;
  showUpdatedBanner:boolean=false;
  
  constructor(
    private dbService: DataDbService,
    private messagesService:MessagesService ) { }

  ngOnInit() {
    this.dbService.getUsers().subscribe(users=>{
      this.users = users
      this.loading=false;
    })
   
  }


}
