import { Component, OnInit, Input } from '@angular/core';
import {DataDbService} from '../services/data-db.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Iuser} from '../models/user.model'
import { ActivatedRoute } from "@angular/router";
import { map } from 'rxjs/operators';


@Component({
  selector: 'userForm',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})

export class UserFormComponent implements OnInit {

  formTitle:string;
  userId;
  formMode;
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
    private route: ActivatedRoute
    ){}
  ngOnInit() {

    this.route.params.subscribe(params=>{

      this.userId = params.id;
      console.log("params id: ",this.userId )

      if(this.userId!==undefined){
        return this.dbService.getUser(this.userId).subscribe(userInfo=>{
          this.formTitle="Edit user";
          this.initializeForm(userInfo)
        })
      }
      else{
        console.log("entro a else");
        this.formTitle="Add User";
      }
    })
  }





  saveNewUser(){

    if(this.addUserForm.valid){
      this.dbService.addNewUser(this.addUserForm.value);
      this.addUserForm.reset();
      this.formSubmitted=true;
      console.log('saved', this.formSubmitted);
      }else{
        console.log("Form Not Valid")
      }
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


