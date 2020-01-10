import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserListComponent} from './userlist/user-list.component';
import { SharedModule } from '../shared/shared.module';
import {ModalComponent} from './modal/modal.component';
import { RouterModule, Routes } from '@angular/router';
/* import {UserFormComponent} from '../shared/userform/user-form.component'; */



const routes: Routes = [
  {path:'edit/:id', component:ModalComponent}
]

@NgModule({
  declarations: [UserListComponent, ModalComponent],
  imports: [
    RouterModule.forChild(routes) ,CommonModule, SharedModule
  ],
  exports:[UserListComponent, ModalComponent,RouterModule]
})
export class UsersModule { }
