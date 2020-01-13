import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {UserFormComponent} from './userform/user-form.component';
import { ModalComponent } from './modal/modal.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    UserFormComponent,
    ModalComponent,
    MessagesComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports:[
    ReactiveFormsModule,
    UserFormComponent,
    ModalComponent,
    MessagesComponent
  ]
})
export class SharedModule { }
