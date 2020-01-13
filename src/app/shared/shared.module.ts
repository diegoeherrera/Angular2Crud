import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {UserFormComponent} from './userform/user-form.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    UserFormComponent,
    ModalComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports:[
    ReactiveFormsModule,
    UserFormComponent,
    ModalComponent]
})
export class SharedModule { }
