import { Component, EventEmitter, Input, Output,HostListener, OnChanges} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {AppComponent} from './app.component';

@Component({
  selector: 'ds-jzp-edit',
  templateUrl: './jzp-edit.component.html',
  styleUrls: ['./jzp-edit.component.css'],
  providers: [
  ]
})
export class JZPEditComponent {

    constructor(private route: ActivatedRoute) {
        console.log(this.route);
    }

}
