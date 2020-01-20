import { Component, OnInit, Input } from '@angular/core';
import {DataDbService} from '../../services/data-db.service';
import {FormControl, FormGroup, Validators, AbstractControl, ValidationErrors} from '@angular/forms';
import {Iuser} from '../../models/user.model'
import { ActivatedRoute } from "@angular/router";
import { map } from 'rxjs/operators';
import { MessagesService } from '../../services/messages.service';


@Component({
  selector: 'userForm',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})

export class UserFormComponent implements OnInit {

  formTitle:string;
  userId;
  formMode='addUser';
  userInfo;
  formError={}

  /* Pattern to check valid emails*/
  emailRegex: any = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  formSubmitted:boolean=false;

  /* Form Initialize in Add User mode by default */
  userForm = new FormGroup({
    name:new FormControl(''),
    email: new FormControl(''),
    validator: new FormControl(''),
    mobile: new FormControl(''),
    age: new FormControl(''),
  });


  //getters for avoid template errors
  get name(){ return this.userForm.get("name")};
  get email(){ return this.userForm.get("email")};
  get mobile(){ return this.userForm.get("mobile")};
  get age(){ return this.userForm.get("age")};


  constructor(
    private dbService: DataDbService,
    private route: ActivatedRoute,
    private messageService: MessagesService
    ){}

  ngOnInit() {
    /* get url params*/
    this.route.params.subscribe(params=>{
      this.userId = params.id;
     
      /*Check the url for user Id in order to set the form in Edit Mode*/
      this.formInit(this.userId);
  })
}

async formInit(userId){

  var userInfo;
  if(userId){
    
    this.formMode='editUser'
    this.dbService.getUser(userId).subscribe(userInfo=>{
      
      this.formTitle="Edit user";

      this.userForm = new FormGroup({
        name: new FormControl( userInfo.name, [Validators.required, Validators.minLength(4),Validators.maxLength(10)]),
        email: new FormControl(userInfo.email, [Validators.required, Validators.minLength(7), Validators.maxLength(20),
        Validators.pattern(this.emailRegex)]),
        mobile: new FormControl( userInfo.mobile,[Validators.minLength(4), Validators.maxLength(20)]),
        age: new FormControl(userInfo.age, [Validators.maxLength(2)])
      });
    })
  }
  
  else {
    this.formTitle="Add User";
    this.formMode='addUser';

    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4),Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(20),
      Validators.pattern(this.emailRegex)]),
      mobile: new FormControl('',[Validators.minLength(4), Validators.maxLength(20)]),
      age: new FormControl('', [Validators.maxLength(2)])
    });
  }
}



  handleForm(){

    this.formMode == 'addUser' ? this.updateUser() : this.saveNewUser();

  }


  saveNewUser(){

    const updatedUser = this.userForm.value;

      this.dbService.updateUser(updatedUser,this.userId);

      this.messageService.updateMessage({
        type:"updatedUser",
        text:"User was updated!"
      })
    
  }

  updateUser(){
   
    this.dbService.addNewUser(this.userForm.value);
        this.userForm.reset();
        this.formSubmitted=true;
  
        this.messageService.updateMessage({
          type:"newUser",
          text:"New user added to Database :)"
        })

 
   }
  
   /* HTML -> add button */
  closeModal():boolean{
    return this.formSubmitted=false;
  }



  /* verificar la forma de que corra esta funciona cada vez que el usuario escribe en el input*/
  checkForm(fieldName){
    console.log("U U UU UUUUU, ",fieldName)
    switch (fieldName) {
      case 'name':
        console.log(fieldName)
        return this.checkName()
        break;
    
      default:
        break;
    }

  }


    checkName(){

    const nameErrors = this.userForm.controls.name.errors

      if(nameErrors.required){
        return this.formError.name = "Please enter a name";
      }
      
      if (nameErrors.minlength){
        return this.formError.name = "Name should have more than 4 letters";
      }

      if(nameErrors.maxLength){
        return this.formError.name = "Name should not exceed 10 characters";
      }
    
  } 

}


