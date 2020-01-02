import { Component, OnInit, Input } from '@angular/core';
import {DataDbService} from '../services/data-db.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Iuser} from '../models/user.model'
import { ActivatedRoute } from "@angular/router";
import { map } from 'rxjs/operators';
import { MessagesService } from '../services/messages.service';


@Component({
  selector: 'userForm',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})

export class UserFormComponent implements OnInit {

  formTitle:string;
  userId;
  formMode='addUser';
  userInformation;

  /* Pattern to check valid emails*/
  emailRegex: any = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  formSubmitted:boolean=false;

  /* Form Initialize in Add User mode by default */
  addUserForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4),Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(20),
    Validators.pattern(this.emailRegex)]),
    mobile: new FormControl('',[Validators.minLength(4), Validators.maxLength(20)]),
    age: new FormControl('', [Validators.maxLength(2)])
  });


  //getters for avoid template errors
  get name(){ return this.addUserForm.get("name")};
  get email(){ return this.addUserForm.get("email")};
  get mobile(){ return this.addUserForm.get("mobile")};
  get age(){ return this.addUserForm.get("age")};


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
      if(this.userId!==undefined){
        this.formMode='editUser'
        return this.dbService.getUser(this.userId).subscribe(userInfo=>{
          this.formTitle="Edit user";
          this.initializeForm(userInfo)
        })
      }
      else{
        console.log("entro a else");
        this.formTitle="Add User";
        this.formMode='addUser'
      }
    })
  }

  handleForm(){
    if(this.formMode!=='addUser'){
      const updatedUser = this.addUserForm.value;
      this.dbService.updateUser(updatedUser,this.userId);
      this.messageService.updateMessage({
        type:"editedUser",
        text:"User was updated!"
      })
    }else{

      if(this.addUserForm.valid){
        this.dbService.addNewUser(this.addUserForm.value);
        this.addUserForm.reset();
        this.formSubmitted=true;
  
        this.messageService.updateMessage({
          type:"newUser",
          text:"New user added to Database :)"
        })

        console.log('saved', this.formSubmitted);
        
        }else{
          console.log("Form Not Valid")
        }
    }
  }





  saveNewUser(){
    
  }

  updateUser(){
   
 
   }

  closeModal():boolean{
    return this.formSubmitted=false;
  }

  initializeForm(userInfo){
    console.log("ENTRO EN EDIT MODE !!!", userInfo)
    this.addUserForm = new FormGroup({
    name: new FormControl( userInfo.name, [Validators.required, Validators.minLength(4),Validators.maxLength(10)]),
    email: new FormControl(userInfo.email, [Validators.required, Validators.minLength(7), Validators.maxLength(20),
    Validators.pattern(this.emailRegex)]),
    mobile: new FormControl( userInfo.mobile,[Validators.minLength(4), Validators.maxLength(20)]),
    age: new FormControl(userInfo.age, [Validators.maxLength(2)])
  });


     // console.log(this.userInformation)

    }
}


