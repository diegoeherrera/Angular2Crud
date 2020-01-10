import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserListComponent} from './user-list.component'
import {ModalComponent} from '../modal/modal.component'
import { ReactiveFormsModule } from '@angular/forms'; 
/* import { RouterModule, Routes } from '@angular/router'; */
import { ModalModule } from '../modal/modal.module';


const routes: Routes = [
  {path:'edit/:id', component:ModalComponent}
]

@NgModule({
  declarations: [UserListComponent],
  imports: [
    RouterModule.forChild(routes), CommonModule, ReactiveFormsModule, ModalModule
  ],
  exports: [UserListComponent]
})
export class UserlistModule {

 }
