import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {UserFormComponent} from './userform/user-form.component';
import { ModalComponent } from './modal/modal.component';
import { MessagesComponent } from './messages/messages.component';
import { AutoHideDirective } from './auto-hide.directive';
import { InputErrorComponent } from './userform/input-error/input-error.component';


@NgModule({
  declarations: [
    UserFormComponent,
    ModalComponent,
    MessagesComponent,
    AutoHideDirective,
    InputErrorComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports:[
    ReactiveFormsModule,
    UserFormComponent,
    ModalComponent,
    MessagesComponent,
    AutoHideDirective,
    InputErrorComponent
  ]
})
export class SharedModule { }
