import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { OptBookingListComponent } from './opt-booking-list/opt-booking-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ExpansionPanelComponent,
    OptBookingListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
