import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { UserListComponent } from './userlist/user-list.component';
import { UserComponent } from  './user/user.component';

@NgModule({
  declarations: [ 
    UserListComponent,
    UserComponent 
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
