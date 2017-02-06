import { Component } from '@angular/core';
import {AppComponent} from './app.component';

@Component({
  selector: 'ds-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  firstName = "Paul";
  lastName = "Pröll";

}
