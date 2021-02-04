import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoiComponent } from './poi/poi.component';
import { FooterGenericComponent } from './poi/footer-generic/footer-generic.component';
import { NavigationHeaderComponent } from './poi/navigation-header/navigation-header.component';
import { LocationsComponent } from './poi/locations/locations.component';
import {LocationService} from "./poi/services/LocationService";
import { AboutComponent } from './poi/about/about.component';
import { PageHeaderComponent } from './poi/page-header/page-header.component';
import { HtmlLineBreaksPipe } from './poi/pipes/html-line-breaks.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PoiComponent,
    FooterGenericComponent,
    NavigationHeaderComponent,
    LocationsComponent,
    AboutComponent,
    PageHeaderComponent,
    HtmlLineBreaksPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
