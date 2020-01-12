import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserListComponent} from './userlist/user-list.component';
import { SharedModule } from '../shared/shared.module';
import {ModalComponent} from './modal/modal.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [ 
    UserListComponent, 
    ModalComponent 
  ],
  imports: [
    AppRoutingModule, 
    CommonModule, 
    SharedModule
  ],
  exports: [ 
    UserListComponent, 
    ModalComponent 
  ]
})
export class UsersModule { }
