import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent {

  @ViewChild('para') para!: ElementRef;

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    let myPara = this.para.nativeElement;
    myPara.innerHTML = "this.para.nativeElement";
  }
}
