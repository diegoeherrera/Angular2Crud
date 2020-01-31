import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.scss']
})

export class InputErrorComponent implements OnInit {
  @Input() fieldErrors;
  @Input() fieldName;
  public errorMsg;


  constructor() { }

  ngOnInit() {
    console.log("errores: ", this.fieldErrors , ' /// ', "field name: ", this.fieldName);
   
  }

/*   ngOnChanges(changes:SimpleChanges){
    console.log(changes.fieldErrors, "///", changes.fieldTouched);
    this.errorMsg =  changes.fieldErrors.required;
  }
 */
  setErrorMsgs(){

    
   /*  if(this.fieldErrors.touched && this.fieldErrors.required){
      this.errorMsg = "This Field is mandatory" 
    }*/
  }


}
