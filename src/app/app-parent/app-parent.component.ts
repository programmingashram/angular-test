import { Component, ContentChildren, QueryList } from '@angular/core';
import { AppItemComponent } from '../app-item/app-item.component';

@Component({
  selector: 'app-app-parent',
  templateUrl: './app-parent.component.html',
  styleUrls: ['./app-parent.component.scss']
})
export class AppParentComponent {
  @ContentChildren('AppItemComponent') items!: QueryList<AppItemComponent>;

itemsList: string[] = [];

 ngAfterContentInit(): void {
  //Called after ngOnInit when the component's or directive's content has been initialized.
  //Add 'implements AfterContentInit' to the class.

  // this.itemsList = this.items.map((item: ItemComponent, index: number) => {
  //   return `Item ${index + 1}: ${item.summary}`;
  // });



  this.itemsList = this.items.map(
   (item :  AppItemComponent, index: number) =>{
      return `Item ${index + 1}: ${item.summary}`
   }
  )


 }
}
