import { Component, OnInit,Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataDbService} from '../../services/data-db.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit{
  @Input() userInformation;
  userId;



  constructor(
    private dataService:DataDbService,
    private route: ActivatedRoute
    ){};

  ngOnInit() {

    //console.log("ngOnit modal: ",this.route.snapshot.params.id);

/*         this.editUserForm.setValue({
        name: this.userInformation.name,
        email: this.userInformation.email,
        mobile: this.userInformation.mobile,
        age: this.userInformation.age
      });

      this.userId = this.userInformation.id */
  }

  //updates the value of the form




  saveChanges(information):void{

    //ACA SE GRABA EN DB
    console.log("user updated!")
   /*  const updatedUser=this.editUserForm.value;
    this.dataService.updateUser(updatedUser,this.userId);
    this.userUpdated.emit(true); */

  }

}




