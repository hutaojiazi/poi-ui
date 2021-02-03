import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoiComponent } from './poi/poi.component';
import { FooterGenericComponent } from './poi/footer-generic/footer-generic.component';
import { NavigationHeaderComponent } from './poi/navigation-header/navigation-header.component';

@NgModule({
  declarations: [
    AppComponent,
    PoiComponent,
    FooterGenericComponent,
    NavigationHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
