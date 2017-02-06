import { Component, EventEmitter, Input, Output,HostListener, OnChanges} from '@angular/core';
import {AppComponent} from './app.component';

@Component({
  selector: 'ds-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [
  ]
})
export class ProfileComponent {

    data = {
        firstName: "Paul",
        lastName: "Pröll",
        role: "Betreuer",
        groups: ["MOB", "TOP"]
    }

    constructor() {
    }

}
