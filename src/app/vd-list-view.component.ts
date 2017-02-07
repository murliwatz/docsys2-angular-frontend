import { Component, EventEmitter, Input, Output,HostListener, OnChanges} from '@angular/core';
import {AppComponent} from './app.component';
import {VDDocService} from './vddoc.service';

@Component({
  selector: 'ds-vd-listview',
  templateUrl: './vd-list-view.component.html',
  styleUrls: ['./vd-list-view.component.css'],
  providers: [
      VDDocService
  ]
})
export class VDListViewComponent {

    documents;

    constructor(private vddoc: VDDocService) {
        this.documents = this.vddoc.getDocuments();
    }

}
