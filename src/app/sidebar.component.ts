import { Component, EventEmitter, Input, Output, HostListener} from '@angular/core';
import {AppComponent} from './app.component';

@Component({
  selector: 'ds-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

    selected: String;
    height = 0;

    constructor() {
        this.height = window.innerHeight - 50;
    }

    @Output() onDocumentSelected = new EventEmitter<String>();

    onClick(type: String) {
        this.selected = type;
        this.onDocumentSelected.emit(type);
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.height = window.innerHeight - 50;
        console.log(event.target.innerWidth - 250);
    }

    isSelected(type: String) {
        return (type == this.selected);
    }

}
