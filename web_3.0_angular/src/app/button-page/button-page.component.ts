import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-page',
  templateUrl: './button-page.component.html',
  styleUrls: ['./button-page.component.sass']
})

export class ButtonPageComponent {
  @Input() buttons: any[] = [];


}
