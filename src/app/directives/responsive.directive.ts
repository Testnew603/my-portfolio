import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[responsive]'
})
export class ResponsiveDirective {

  constructor(
    private _breakpointObserver: BreakpointObserver,
    private _element: ElementRef
    ) {
      this._breakpointObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
      .subscribe({
        next: (result: any) => {
          for(let breakpoint of Object.keys(result.breakpoints)) 
            if(result.breakpoints[breakpoint]) {
              if(breakpoint === Breakpoints.HandsetPortrait)           
                this._element.nativeElement.classList.remove('pc');
                
              if(breakpoint === Breakpoints.WebLandscape)                
                this._element.nativeElement.classList.add('pc');              
            }              
        },
      });
    }
}
