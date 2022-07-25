import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GmapsComponent } from './gmaps/gmaps.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkerDetailsComponent } from './marker-details/marker-details.component';

@NgModule({
  declarations: [
    AppComponent,
    GmapsComponent,
    MarkerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
