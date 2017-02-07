import { Component, EventEmitter, Input, Output,HostListener, OnChanges} from '@angular/core';
import {AppComponent} from './app.component';

@Component({
  selector: 'ds-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.css'],
  providers: [
  ]
})
export class ProfileDataComponent {

    data = {
        firstName: "Paul",
        lastName: "Pröll",
        role: "Betreuer",
        groups: ["MOB", "TOP"]
    }

    constructor() {
    }

}
