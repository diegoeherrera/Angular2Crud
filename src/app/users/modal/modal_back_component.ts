import { Component, OnInit,Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataDbService} from '../../services/data-db.service';



@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit, OnChanges{

  //get the user information to populate the initial form
  @Input() userInformation;
  //set the status of the banner when the user updates the information (on the user info template)
  @Output() userUpdated = new EventEmitter<boolean>()

  userId:string;

  /* Pattern to check valid emails*/
  emailRegex: any = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  
  //form init
  editUserForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4),Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(20),
      Validators.pattern(this.emailRegex)]),
    mobile: new FormControl('',[Validators.minLength(4), Validators.maxLength(20)]),
    age: new FormControl('', Validators.maxLength(2))
    
  });
 
    //getters for avoid template errors

    get name(){ return this.editUserForm.get("name")};
    get email(){ return this.editUserForm.get("email")};
    get mobile(){ return this.editUserForm.get("mobile")};
    get age(){ return this.editUserForm.get("age")}; 
 
  constructor(private dataService:DataDbService) {}

  ngOnInit() {
    
/*         this.editUserForm.setValue({
        name: this.userInformation.name,
        email: this.userInformation.email,
        mobile: this.userInformation.mobile,
        age: this.userInformation.age
      });
      
      this.userId = this.userInformation.id */
  }

  //updates the value of the form 
  ngOnChanges(changes:SimpleChanges){

    const newUserInfo = changes.userInformation.currentValue
    
    this.editUserForm.setValue({
        name: newUserInfo.name,
        email:newUserInfo.email,
        mobile: newUserInfo.mobile,
        age: newUserInfo.age
      });

      this.userId = this.userInformation.id 
  }
 
 

  
  saveChanges(information):void{
    console.log("user updated!")
    const updatedUser=this.editUserForm.value;
    this.dataService.updateUser(updatedUser,this.userId);
    this.userUpdated.emit(true);
    
  }
}




