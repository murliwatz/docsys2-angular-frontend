import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header.component';
import {SidebarComponent} from './sidebar.component';
import {ViewComponent} from './view.component';
import {JZPListViewComponent} from './jzp-list-view.component';
import {JZPEditComponent} from './jzp-edit.component';
import {VDListViewComponent} from './vd-list-view.component';
import {ProfileDataComponent} from './profile-data.component';
import {ProfilePWComponent} from './profile-change-pw.component';

const appRoutes: Routes = [
  { path: 'jahreszielplanungen', component: JZPListViewComponent },
  { path: 'jzp-edit/:id', component: JZPEditComponent },
  { path: 'verlaufsdokumentationen', component: VDListViewComponent },
  { path: 'meine-daten', component: ProfileDataComponent },
  { path: 'passwort-aendern', component: ProfilePWComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ViewComponent,
    JZPListViewComponent,
    JZPEditComponent,
    VDListViewComponent,
    ProfileDataComponent,
    ProfilePWComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
