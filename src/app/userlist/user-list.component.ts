import { Component, OnInit } from '@angular/core';
import {DataDbService} from '../services/data-db.service';
import {Iuser} from '../models/user.model';
/* import { analytics } from 'firebase'; */

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
  
  constructor(private dbService: DataDbService) { }

  ngOnInit() {

    this.dbService.getUsers().subscribe(users=>{
      this.users = users
      this.loading=false;
    })
   
  }

  handleRemove(id:string):void{
    this.dbService.removeUser(id)
  }

  openEditForm(user):void{
    this.openModal = true;
    this.editInfo = user;
  }

  setBannerStatus($event):void{
    this.showUpdatedBanner=$event;
  }

  
  closeBanner():boolean{  
    return this.showUpdatedBanner=false;
  }

}
