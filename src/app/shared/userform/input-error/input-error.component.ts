import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.scss']
})
export class InputErrorComponent implements OnInit, OnChanges {
  @Input() fieldErrors: Object;
  @Input() fieldTouched;
  public errorMsg: string;


  constructor() { }

  ngOnInit() {
    console.log(this.fieldErrors, ' /// ', this.fieldTouched);
  }

  ngOnChanges(changes:SimpleChanges){
    console.log(changes.fieldErrors, "///", changes.fieldTouched)
  }

  setErrorMsgs(){

    
   /*  if(this.fieldErrors.touched && this.fieldErrors.required){
      this.errorMsg = "This Field is mandatory" 
    }*/
  }


}
