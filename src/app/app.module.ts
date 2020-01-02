import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* import { AppRoutingModule } from './app-routing.module'; */
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import {DataDbService} from './services/data-db.service';
import {NgForm} from '@angular/forms';
import { UserformModule } from './userform/userform.module';
import {UserlistModule} from './userlist/userlist.module';
import { ModalModule } from './modal/modal.module';
import { RouterModule } from '@angular/router';

const routes = [];
@NgModule({
  declarations: [
    AppComponent
   
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    /* AppRoutingModule, */
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    UserformModule,
    UserlistModule,
    ModalModule
  ],
  providers: [DataDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
