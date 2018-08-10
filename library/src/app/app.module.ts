
import { AppComponent } from './app.component';
import {CdkTableModule} from '@angular/cdk/table';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatOptionModule,
  MatDialogTitle,
} from '@angular/material';

import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { OptBookingListComponent } from './opt-booking-list/opt-booking-list.component';
import { OptBookingSummaryComponent } from './opt-booking-summary/opt-booking-summary.component';
import { OptBookingDetailsComponent } from './opt-booking-details/opt-booking-details.component';
import { AdditionalInformationComponent} from "./additional-information/additional-information.component";
import { OptSectionHeadingComponent } from './opt-section-heading/opt-section-heading.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { OptPopupModalComponent } from './opt-popup-modal/opt-popup-modal.component';
import { OptPopupWindowComponent } from './opt-popup-window/opt-popup-window.component';
import { OptTabPanelComponent } from './opt-tab-panel/opt-tab-panel.component';
import { RoutingProjectComponent } from './routing-project/routing-project.component';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';

import { RouterModule, Routes} from "@angular/router";
import {APP_BASE_HREF} from '@angular/common';

import {OptAlertComponent} from "./opt-alert/opt-alert.component";
import { OptBookingListExpandComponent } from './opt-booking-list-expand/opt-booking-list-expand.component';
import { OptCorporateClientTabsComponent } from './opt-corporate-client-tabs/opt-corporate-client-tabs.component';
import { OptClientListComponent } from './opt-client-list/opt-client-list.component';
import { OptClientSummaryComponent } from './opt-client-summary/opt-client-summary.component';
import {OptTooltipComponent} from "./opt-tooltip/opt-tooltip.component";
import {OptSearchPanelComponent} from "./opt-search-panel/opt-search-panel.component";
import {OptBookingActivitiesComponent} from "./opt-booking-activities/opt-booking-activities.component";
import {OptChipComponent} from './opt-chip/opt-chip.component';
// import { OptDocumentSelectComponent } from './opt-document-select/opt-document-select.component';
// import { OptEventLog } from './opt-document-select/opt-document-select.component';
// import { OptUpload } from './opt-document-select/opt-document-select.component';
import { OptBookingPaymentComponent} from './opt-booking-payment/opt-booking-payment.component';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { OptCorporateClientPopupComponent } from './opt-corporate-client-popup/opt-corporate-client-popup.component';

import { OptBookingMainTabsComponent } from './opt-booking-main-tabs/opt-booking-main-tabs.component';
import { OptBookingFullPageComponent } from './opt-booking-full-page/opt-booking-full-page.component';
import { OptPaginatorComponent } from './opt-paginator/opt-paginator.component';
import { OptCustomerFullPageComponent } from './opt-customer-full-page/opt-customer-full-page.component';
import { OptFabComponent } from './opt-fab/opt-fab.component';
import { OptClientPopupComponent } from './opt-client-popup/opt-client-popup.component';
import { OptIndividualClientPopupComponent } from './opt-individual-client-popup/opt-individual-client-popup.component';
import { OptChipInputComponent } from './opt-chip-input/opt-chip-input.component';

import { OptChipDatePickerComponent } from './opt-chip-date-picker/opt-chip-date-picker.component';
import { TypographyComponent } from './typography/typography.component';
import { OptChipSelectComponent } from './opt-chip-select/opt-chip-select.component';
import { OptPricePopupComponent } from './opt-price-popup/opt-price-popup.component';
import { OptPageloaderComponent } from './opt-pageloader/opt-pageloader.component';
import { Opt404Component } from './opt-404/opt-404.component';
import { OptPackageDetailsComponent } from './opt-package-details/opt-package-details.component';
import { OptCollectionDispatchPopupComponent } from './opt-collection-dispatch-popup/opt-collection-dispatch-popup.component';
import { OptCollectionDispatchListComponent } from './opt-collection-dispatch-list/opt-collection-dispatch-list.component';
import { OptEmailDocumentPopupComponent } from './opt-email-document-popup/opt-email-document-popup.component';
import { OptTicketScanPopupComponent } from './opt-ticket-scan-popup/opt-ticket-scan-popup.component';
import { OptPaymentModalComponent } from './opt-payment-modal/opt-payment-modal.component';
import { OptPackagePopupComponent } from './opt-package-popup/opt-package-popup.component';
import {OptItemPopupComponent} from "./opt-item-popup/opt-item-popup.component";
import { OptPackageCartComponent } from './opt-package-cart/opt-package-cart.component';




const appRoutes: Routes = [
  { path: 'opt-booking-list', component: OptBookingListComponent},
  { path: 'opt-booking-details', component: OptBookingDetailsComponent},
  { path: 'opt-booking-summary', component: OptBookingSummaryComponent},
  { path: 'additional-information', component: AdditionalInformationComponent},
  { path: 'opt-section-heading', component: OptSectionHeadingComponent},
  { path: 'opt-section-heading', component: OptSectionHeadingComponent},
  { path: 'opt-popup-window', component: OptPopupWindowComponent},
  { path: 'expansion-panel', component: ExpansionPanelComponent},
  { path: 'opt-tab-panel', component: OptTabPanelComponent},
  { path: 'opt-alert', component: OptAlertComponent},
  { path: 'opt-booking-list-expand', component: OptBookingListExpandComponent},
  { path: 'opt-corporate-client-tabs', component: OptCorporateClientTabsComponent},
  { path: 'opt-client-list', component: OptClientListComponent},
  { path: 'opt-client-summary', component: OptClientSummaryComponent},
  { path: 'opt-tooltip', component: OptTooltipComponent},
  { path: 'opt-search-panel', component: OptSearchPanelComponent},
  { path: 'opt-booking-activities', component: OptBookingActivitiesComponent},
  { path: 'opt-chip', component: OptChipComponent},
  { path: 'opt-corporate-client-popup', component: OptCorporateClientPopupComponent},
  { path: 'opt-booking-full-page', component: OptBookingFullPageComponent},
  { path: 'opt-paginator', component: OptPaginatorComponent},
  { path: 'opt-customer-full-page', component: OptCustomerFullPageComponent},
  { path: 'opt-fab', component: OptFabComponent},
  { path: 'opt-chip-input', component: OptChipInputComponent},
  { path: 'app-opt-chip-date-picker', component: OptChipDatePickerComponent},
  { path: 'picker', component: OptChipInputComponent},
  { path: 'typography', component: TypographyComponent},
  { path: 'opt-chip-select', component: OptChipSelectComponent},
  { path: 'opt-booking-payment', component: OptBookingPaymentComponent},
  { path: 'opt-collection-dispatch-popup', component: OptCollectionDispatchPopupComponent},
  { path: 'opt-collection-dispatch-list', component: OptCollectionDispatchListComponent},
  { path: 'opt-email-document-popup', component: OptEmailDocumentPopupComponent},
  { path: 'opt-ticket-scan-popup', component: OptTicketScanPopupComponent},
  { path: 'opt-payment-modal', component: OptPaymentModalComponent},
  { path: 'opt-package-popup', component: OptPackagePopupComponent},
  { path: 'app-opt-404', component: Opt404Component},
  { path: 'app-package-details', component: OptPackageDetailsComponent},


   { path: 'opt-pageloader', component: OptPageloaderComponent},

  { path: '', redirectTo:'/opt-booking-summary', pathMatch:'full'},
  { path: '**', redirectTo:'/opt-booking-summary', pathMatch: 'full'}

]
@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    ScrollDispatchModule

  ],
  declarations: [],
})
export class DemoMaterialModule {}

@NgModule({

  declarations: [
    Opt404Component,
    OptPageloaderComponent,
    AppComponent,
    OptChipDatePickerComponent,
    ExpansionPanelComponent,
    OptChipInputComponent,
    OptBookingListComponent,
    OptBookingDetailsComponent,
    AdditionalInformationComponent,
    OptSectionHeadingComponent,
    ModalWindowComponent,
    ModalContentComponent,
    OptBookingSummaryComponent,
    OptPopupModalComponent,
    OptPopupWindowComponent,
    OptTabPanelComponent,
    OptAlertComponent,
    OptBookingListExpandComponent,
    OptCorporateClientTabsComponent,
    OptClientListComponent,
    OptClientSummaryComponent,
    OptSearchPanelComponent,
    OptTooltipComponent,
    OptBookingActivitiesComponent,
    OptChipComponent,
    OptBookingPaymentComponent,
    OptCorporateClientPopupComponent,
    OptBookingMainTabsComponent,
    OptBookingFullPageComponent,
    OptFabComponent,
    OptPaginatorComponent,
    OptCustomerFullPageComponent,
    OptClientPopupComponent,
    OptIndividualClientPopupComponent,
    OptChipSelectComponent,
    OptPricePopupComponent,
    OptPackageDetailsComponent,
    OptCollectionDispatchPopupComponent,
    OptCollectionDispatchListComponent,
    OptEmailDocumentPopupComponent,
    OptTicketScanPopupComponent,
    OptPaymentModalComponent,
    OptPackagePopupComponent,
    OptItemPopupComponent,
    OptPackageCartComponent,
      // OptDocumentSelectComponent,

    RoutingProjectComponent,
    TypographyComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatProgressBarModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule,
    DemoMaterialModule,
    MatInputModule,
    ScrollDispatchModule,
    NgMultiSelectDropDownModule,
    RouterModule.forRoot(appRoutes)
  ],

  entryComponents:[OptPopupModalComponent, OptPopupWindowComponent, OptClientPopupComponent, OptIndividualClientPopupComponent, OptPaymentModalComponent,OptPackagePopupComponent, OptItemPopupComponent, OptPackageCartComponent],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],

  bootstrap: [AppComponent],
})
export class AppModule { }

// platformBrowserDynamic().bootstrapModule(AppModule);//
