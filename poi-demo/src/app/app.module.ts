import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoiComponent } from './poi/poi.component';
import { LocationsComponent } from './poi/locations/locations.component';
import {LocationService} from "./poi/services/LocationService";
import {UserService} from "./poi/services/UserService";
import {AuthenticationService} from "./poi/services/AuthenticationService";
import {HistoryService} from "./poi/services/HistoryService";
import { AboutComponent } from './poi/about/about.component';
import { PageHeaderComponent } from './poi/page-header/page-header.component';
import { HtmlLineBreaksPipe } from './poi/pipes/html-line-breaks.pipe';
import { DistancePipe } from './poi/pipes/distance.pipe';
import { MostRecentFirstPipe } from './poi/pipes/most-recent-first.pipe';
import { RegisterComponent } from './poi/register/register.component';
import { LoginComponent } from './poi/login/login.component';
import { SidebarComponent } from './poi/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    PoiComponent,
    LocationsComponent,
    AboutComponent,
    PageHeaderComponent,
    HtmlLineBreaksPipe,
    DistancePipe,
    MostRecentFirstPipe,
    RegisterComponent,
    LoginComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [LocationService, UserService, AuthenticationService, HistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
