import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularCRUD';
  formMode = 'editUser';
  userId=3;
  userInformation={name:"JESSI", age:66, mail:'jessi@jesi.com',mobile:2222222}
}
