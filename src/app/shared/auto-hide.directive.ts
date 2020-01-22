import { Directive, ElementRef, Input, HostListener, HostBinding, OnInit, Renderer2,SimpleChanges, AfterViewInit } from '@angular/core';
/* import { ConsoleReporter } from 'jasmine'; */

@Directive({
  selector: '[animateBanner]'
})
export class AutoHideDirective implements OnInit{

  @Input() Msg;
  bannerClass;
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
    ) {}

  ngOnInit(){
    console.log("directive onInit", this.Msg)
  }

 ngOnChanges(changes:SimpleChanges){

    const parent = this.elRef.nativeElement.parentNode;
    const banner = this.elRef.nativeElement;
    const messageType = String(changes.Msg.currentValue.type);

    switch (messageType) {
      case "updatedUser":
      this.animatedBanner(banner, messageType);
       break;
       
       case "userDeleted":
        this.animatedBanner(banner, messageType);
       break;
   
       case "newUser":
        this.animatedBanner(banner, messageType);
         break;

     default:
       break; 
 }
    
  }


  animatedBanner(banner, messageType){

    this.renderer.removeClass(banner,'hide')
    this.renderer.addClass(banner, messageType);
    this.renderer.addClass(banner,'show');

    setTimeout(()=>{     
    this.renderer.removeClass(banner,messageType)
    this.renderer.removeClass(banner,'show')
    this.renderer.addClass(banner,'hide')
   },3000)

  }


}

