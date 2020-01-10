import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModalComponent} from './modal.component';
import { UserformModule } from '../../shared/userform/userform.module';


@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule, UserformModule
  ],
  exports:[ModalComponent]

})
export class ModalModule { }
