import { Component, EventEmitter, Input, Output,HostListener, OnChanges} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {AppComponent} from './app.component';
import {JZPDocService} from './jzpdoc.service';

@Component({
  selector: 'ds-jzp-listview',
  templateUrl: './jzp-list-view.component.html',
  styleUrls: ['./jzp-list-view.component.css'],
  providers: [
      JZPDocService
  ]
})
export class JZPListViewComponent {

    documents;

    constructor(private router: Router, private jzpdoc: JZPDocService) {
        this.documents = this.jzpdoc.getDocuments();
    }

    onSelect(jzp_id) {
        this.router.navigate(['/jzp', jzp_id]);
    }

}
