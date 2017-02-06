import { Component, EventEmitter, Input, Output,HostListener, OnChanges} from '@angular/core';
import {AppComponent} from './app.component';

@Component({
  selector: 'ds-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers: []
})
export class ViewComponent {

    width = 0;
    height = 0;

    constructor() {
        this.width = window.innerWidth - 250;
        this.height = window.innerHeight - 50;
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.width = window.innerWidth - 250;
        this.height = window.innerHeight - 50;
    }

}
