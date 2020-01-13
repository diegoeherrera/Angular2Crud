import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserListComponent} from './userlist/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { MessagesComponent } from './messages/messages.component';
import {UserComponent}  from './user/user.component';

@NgModule({
  declarations: [ 
    UserListComponent, MessagesComponent, UserComponent 
  ],
  imports: [
    AppRoutingModule, 
    CommonModule, 
    SharedModule
  ],
  exports: [ 
    UserListComponent, UserComponent 
  ]
})
export class UsersModule { }
