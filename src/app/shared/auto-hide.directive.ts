import { Directive, ElementRef, Input, HostListener, HostBinding, OnInit, Renderer2 } from '@angular/core';
import { ConsoleReporter } from 'jasmine';

@Directive({
  selector: '[appAutoHide]'
})
export class AutoHideDirective implements OnInit{

  @Input() appAutoHide;
  bannerClass;
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
    ) {




    }

    

  changeColor(){
    console.log("color changed!")
  }

  ngOnInit(){
    console.log("AUTO INIT DATTTT",this.appAutoHide);
  /*   switch (this.appAutoHide) {
      case "updatedUser":
        this.elRef.nativeElement.classList.add('updated');
        this.elRef.nativeElement.classList.add('animate');
        break;
        
        case "userDeleted":
        this.elRef.nativeElement.classList.add('deleted');
        this.elRef.nativeElement.classList.add('animate');
        break;

        case "newUser":
          this.elRef.nativeElement.classList.add('saved');
          this.elRef.nativeElement.classList.add('animate');
          break;
      default:
        break;
    }
 */
    this.elRef.nativeElement.classList.add('animate');



/* 
    if(this.appAutoHide == "updatedUser"){
      console.log("entro!!!!!")
      this.elRef.nativeElement.classList.add('updated')
      this.elRef.nativeElement.classList.add('animate');
     
      
    } */
    
    
  }
   
  ngAfterViewInit(): void {

    switch (this.appAutoHide) {
      case "updatedUser":
        this.elRef.nativeElement.classList.add('updated');
        this.elRef.nativeElement.classList.add('animate');
        break;
        
        case "userDeleted":
        this.elRef.nativeElement.classList.add('deleted');
        this.elRef.nativeElement.classList.add('animate');
        break;

        case "newUser":
          this.elRef.nativeElement.classList.add('saved');
          this.elRef.nativeElement.classList.add('animate');
          break;
      default:
        break;
    }

    this.elRef.nativeElement.classList.add('animate');



 }

}
