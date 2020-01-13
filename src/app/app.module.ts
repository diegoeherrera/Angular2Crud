import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import {DataDbService} from './services/data-db.service';
import {NgForm} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {SharedModule} from './shared/shared.module';
import {UsersModule} from './users/users.module'; 
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent
   
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    SharedModule,
    UsersModule,
    AppRoutingModule
  ],
  providers: [DataDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
