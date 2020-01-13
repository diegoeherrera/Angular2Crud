import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from './shared/modal/modal.component';


const routes: Routes = [
  {path:'edit/:id', component: ModalComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

