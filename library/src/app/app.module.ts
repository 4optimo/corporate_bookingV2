import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { OptBookingListComponent } from './opt-booking-list/opt-booking-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule, MatCheckboxModule, MatOptionModule, MatSelectModule} from '@angular/material';
import { OptBookingDetailsComponent } from './opt-booking-details/opt-booking-details.component';
import { AdditionalInformationComponent } from './additional-information/additional-information.component';
import {FormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    ExpansionPanelComponent,
    OptBookingListComponent,
    OptBookingDetailsComponent,
    AdditionalInformationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatButtonModule,
    MatProgressBarModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
