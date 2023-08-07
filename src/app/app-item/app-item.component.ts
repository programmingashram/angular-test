import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-app-item',
  templateUrl: './app-item.component.html',
  styleUrls: ['./app-item.component.scss']
})
export class AppItemComponent {
  @Input() summary!: ["Ansh", "Harsh"];

}
