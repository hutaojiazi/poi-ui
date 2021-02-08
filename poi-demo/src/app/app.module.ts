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
import {GeolocationService} from "./poi/services/GeolocationService";
import {ChatService} from "./poi/services/ChatService";
import { AboutComponent } from './poi/about/about.component';
import { PageHeaderComponent } from './poi/page-header/page-header.component';
import { HtmlLineBreaksPipe } from './poi/pipes/html-line-breaks.pipe';
import { DistancePipe } from './poi/pipes/distance.pipe';
import { MostRecentFirstPipe } from './poi/pipes/most-recent-first.pipe';
import { RegisterComponent } from './poi/register/register.component';
import { LoginComponent } from './poi/login/login.component';
import { SidebarComponent } from './poi/sidebar/sidebar.component';
import { LocationDetailsComponent } from './poi/location-details/location-details.component';
import { RatingStarsComponent } from './poi/rating-stars/rating-stars.component';
import { ChatComponent } from './poi/chat/chat.component';

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
    SidebarComponent,
    LocationDetailsComponent,
    RatingStarsComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [LocationService, UserService, AuthenticationService, HistoryService, GeolocationService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
