import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {UserFormComponent} from './user-form.component';
import { InputErrorComponent } from './input-error/input-error.component'


@NgModule({
  declarations: [UserFormComponent, InputErrorComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [UserFormComponent]
})
export class UserformModule { }
