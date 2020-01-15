import { Directive, ElementRef, Input, HostListener, HostBinding, OnInit, Renderer2,SimpleChanges, AfterViewInit } from '@angular/core';
/* import { ConsoleReporter } from 'jasmine'; */

@Directive({
  selector: '[appAutoHide]'
})
export class AutoHideDirective implements OnInit, AfterViewInit{

  @Input() appAutoHide;
  bannerClass;
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
    ) {}

  ngOnInit(){

    console.log("directive onInit", this.appAutoHide)

    const parent = this.elRef.nativeElement.parentNode;
    const child = this.elRef.nativeElement;
    console.log(this.appAutoHide)
    switch (this.appAutoHide) {
      case "updatedUser":
        this.elRef.nativeElement.classList.add('updated');
        this.elRef.nativeElement.classList.add('show');
        setTimeout(()=>{
          /*check class assignment in order to make the movement fluid*/
         this.renderer.removeClass(child,'show');
         this.renderer.removeClass(child,'updated');
         this.renderer.addClass(child,'hide');
       },2000)

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

  }

  ngAfterViewInit(){

    console.log("after INIT: ", this.appAutoHide)

  }


 ngOnChanges(changes:SimpleChanges){
    console.log("changes", changes)
    console.log("directive onCnages", changes)
    
  }


}



/* switch (this.appAutoHide) {
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

 */


 /*
 
 const parent = this.elRef.nativeElement.parentNode;
    const child = this.elRef.nativeElement;
    console.log(this.appAutoHide)
    switch (this.appAutoHide) {
      case "updatedUser":
        this.elRef.nativeElement.classList.add('updated');
        this.elRef.nativeElement.classList.add('show');
        setTimeout(()=>{

         this.renderer.removeClass(child,'show');
         this.renderer.removeClass(child,'updated');
         this.elRef.nativeElement.classList.add('hide');

         this.appAutoHide="";
         console.log("elemente destroyed!")
       },3000)

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
