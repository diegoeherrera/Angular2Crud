import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserListComponent} from './userlist/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [ 
    UserListComponent 
  ],
  imports: [
    AppRoutingModule, 
    CommonModule, 
    SharedModule
  ],
  exports: [ 
    UserListComponent 
  ]
})
export class UsersModule { }
