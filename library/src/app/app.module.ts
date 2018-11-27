import { AppComponent } from './app.component';
import { CdkTableModule } from '@angular/cdk/table';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgxEditorModule } from 'ngx-editor';
import { NgxPopper } from 'angular-popper';
import { NgxPopperModule } from 'ngx-popper';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
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

import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { OptBookingListComponent } from './opt-booking-list/opt-booking-list.component';
import { OptBookingSummaryComponent } from './opt-booking-summary/opt-booking-summary.component';
import { OptBookingDetailsComponent } from './opt-booking-details/opt-booking-details.component';
import { AdditionalInformationComponent } from "./additional-information/additional-information.component";
import { OptSectionHeadingComponent } from './opt-section-heading/opt-section-heading.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { OptPopupModalComponent } from './opt-popup-modal/opt-popup-modal.component';
import { OptPopupWindowComponent } from './opt-popup-window/opt-popup-window.component';
import { OptTabPanelComponent } from './opt-tab-panel/opt-tab-panel.component';
import { RoutingProjectComponent } from './routing-project/routing-project.component';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';

import { RouterModule, Routes } from "@angular/router";
import { APP_BASE_HREF } from '@angular/common';

import { OptAlertComponent } from "./opt-alert/opt-alert.component";
import { OptBookingListExpandComponent } from './opt-booking-list-expand/opt-booking-list-expand.component';
import { OptCorporateClientTabsComponent } from './opt-corporate-client-tabs/opt-corporate-client-tabs.component';
import { OptClientListComponent } from './opt-client-list/opt-client-list.component';
import { OptClientSummaryComponent } from './opt-client-summary/opt-client-summary.component';
import { OptTooltipComponent } from "./opt-tooltip/opt-tooltip.component";
import { OptSearchPanelComponent } from "./opt-search-panel/opt-search-panel.component";
import { OptBookingActivitiesComponent } from "./opt-booking-activities/opt-booking-activities.component";
import { OptChipComponent } from './opt-chip/opt-chip.component';
// import { OptDocumentSelectComponent } from './opt-document-select/opt-document-select.component';
// import { OptEventLog } from './opt-document-select/opt-document-select.component';
// import { OptUpload } from './opt-document-select/opt-document-select.component';


import { OptBookingPaymentComponent } from './opt-booking-payment/opt-booking-payment.component';

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
import { OptItemPopupComponent } from "./opt-item-popup/opt-item-popup.component";
import { OptPackageCartComponent } from './opt-package-cart/opt-package-cart.component';
import { OptDataTableComponent } from './opt-data-table/opt-data-table.component';
import { OptHostAddPopupComponent } from "./opt-host-add-popup/opt-host-add-popup.component";
import { OptAddNoteComponent } from './opt-add-note/opt-add-note.component';
import { OptReprintPopupComponent } from './opt-reprint-popup/opt-reprint-popup.component';
import { OptTaskPopupComponent } from './opt-task-popup/opt-task-popup.component';
import { OptPackageSelectionModalComponent } from './opt-package-selection-modal/opt-package-selection-modal.component';
import { OptSuccessComponent } from './opt-success/opt-success.component';
import { OptBookingDetailsFullPageComponent } from './opt-booking-details-full-page/opt-booking-details-full-page.component';
import { OptItemCartComponent } from './opt-item-cart/opt-item-cart.component';
import { OptModalPopoverComponent } from './opt-modal-popover/opt-modal-popover.component';
import { OptTabbedPopoverComponent } from './opt-tabbed-popover/opt-tabbed-popover.component';
import { OptDocumentPopoverComponent } from './opt-document-popover/opt-document-popover.component';
import { OptInvoiceGeneratorComponent } from './opt-invoice-generator/opt-invoice-generator.component';
import { OptItemModalPopoversComponent } from './opt-item-modal-popovers/opt-item-modal-popovers.component';
import { OptQuestionnairePopupComponent } from './opt-questionnaire-popup/opt-questionnaire-popup.component';
import { OptDocumentSelectPopupComponent } from './opt-document-select-popup/opt-document-select-popup.component';
import { OptErrorPageComponent } from './opt-error--page/opt-error--page.component';
import { OptLoadingScreenComponent } from './opt-loading--screen/opt-loading--screen.component';
import { OptShipmentScreenComponent } from './opt-shipment-screen/opt-shipment-screen.component';
import { OptDispatchAddNewAddressComponent } from './opt-dispatch-add-new-address/opt-dispatch-add-new-address.component';
import { OptToastMessageComponent } from './opt-toast-message/opt-toast-message.component';
import { OptErrorMessageComponent } from './opt-error-message/opt-error-message.component';
import { OptWarningMessageComponent } from './opt-warning-message/opt-warning-message.component';
import { OptSuccessMessageComponent } from './opt-success-message/opt-success-message.component';
import { OptCancelBookingComponent } from './opt-cancel-booking/opt-cancel-booking.component';
import { OptCounterComponent } from './opt-counter/opt-counter.component';
import { OptTripleToggleComponent } from './opt-triple-toggle/opt-triple-toggle.component';
import { OptDoubleToggleComponent } from './opt-double-toggle/opt-double-toggle.component';
import { OptMessageDialogComponent } from './opt-message-dialog/opt-message-dialog.component';
import { OptDiscountSearchComponent } from './opt-discount-search/opt-discount-search.component';
import { OptNormalSearchComponent } from './opt-normal-search/opt-normal-search.component';
import { OptDiscountCartComponent } from './opt-discount-cart/opt-discount-cart.component';



const appRoutes: Routes = [
  { path: 'opt-booking-list', component: OptBookingListComponent },
  { path: 'opt-booking-details', component: OptBookingDetailsComponent },
  { path: 'opt-booking-summary', component: OptBookingSummaryComponent },
  { path: 'additional-information', component: AdditionalInformationComponent },
  { path: 'opt-section-heading', component: OptSectionHeadingComponent },
  { path: 'opt-section-heading', component: OptSectionHeadingComponent },
  { path: 'opt-popup-window', component: OptPopupWindowComponent },
  { path: 'expansion-panel', component: ExpansionPanelComponent },
  { path: 'opt-tab-panel', component: OptTabPanelComponent },
  { path: 'opt-alert', component: OptAlertComponent },
  { path: 'opt-booking-list-expand', component: OptBookingListExpandComponent },
  { path: 'opt-corporate-client-tabs', component: OptCorporateClientTabsComponent },
  { path: 'opt-client-list', component: OptClientListComponent },
  { path: 'opt-client-summary', component: OptClientSummaryComponent },
  { path: 'opt-tooltip', component: OptTooltipComponent },
  { path: 'opt-search-panel', component: OptSearchPanelComponent },
  { path: 'opt-booking-activities', component: OptBookingActivitiesComponent },
  { path: 'opt-chip', component: OptChipComponent },
  { path: 'opt-corporate-client-popup', component: OptCorporateClientPopupComponent },
  { path: 'opt-booking-full-page', component: OptBookingFullPageComponent },
  { path: 'opt-paginator', component: OptPaginatorComponent },
  { path: 'opt-customer-full-page', component: OptCustomerFullPageComponent },
  { path: 'opt-fab', component: OptFabComponent },
  { path: 'opt-chip-input', component: OptChipInputComponent },
  { path: 'app-opt-chip-date-picker', component: OptChipDatePickerComponent },
  { path: 'picker', component: OptChipInputComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'opt-chip-select', component: OptChipSelectComponent },
  { path: 'opt-booking-payment', component: OptBookingPaymentComponent },
  { path: 'opt-collection-dispatch-popup', component: OptCollectionDispatchPopupComponent },
  { path: 'opt-collection-dispatch-list', component: OptCollectionDispatchListComponent },
  { path: 'opt-email-document-popup', component: OptEmailDocumentPopupComponent },
  { path: 'opt-ticket-scan-popup', component: OptTicketScanPopupComponent },
  { path: 'opt-payment-modal', component: OptPaymentModalComponent },
  { path: 'opt-package-popup', component: OptPackagePopupComponent },
  { path: 'app-opt-404', component: Opt404Component },
  { path: 'app-package-details', component: OptPackageDetailsComponent },
  { path: 'opt-host-add-popup', component: OptHostAddPopupComponent },
  { path: 'opt-add-note-popup', component: OptAddNoteComponent },
  { path: 'opt-reprint-popup', component: OptReprintPopupComponent },
  { path: 'opt-task-popup', component: OptTaskPopupComponent },
  { path: 'opt-success', component: OptSuccessComponent },
  { path: 'opt-booking-details-full-page', component: OptBookingDetailsFullPageComponent },
  { path: 'opt-package-cart', component: OptPackageCartComponent },
  { path: 'opt-item-cart', component: OptItemCartComponent },
  { path: 'opt-modal-popover', component: OptModalPopoverComponent },
  { path: 'opt-tabbed-popover', component: OptTabbedPopoverComponent },
  { path: 'opt-document-popover', component: OptDocumentPopoverComponent },
  { path: 'opt-invoice-generator', component: OptInvoiceGeneratorComponent },
  { path: 'opt-questionnaire-popup', component: OptQuestionnairePopupComponent },
  { path: 'opt-document-select-popup', component: OptDocumentSelectPopupComponent },
  { path: 'opt-item-modal-popovers', component: OptItemModalPopoversComponent },
  { path: 'opt-booking-details-full-page', component: OptBookingDetailsFullPageComponent },
  { path: 'opt-package-selection-modal', component: OptPackageSelectionModalComponent },
  { path: 'opt-package-details', component: OptPackageDetailsComponent },
  { path: 'app-opt-error--page', component: OptErrorPageComponent },
  { path: 'opt-pageloader', component: OptPageloaderComponent },
  { path: 'opt-loading--screen', component: OptLoadingScreenComponent },
  { path: 'opt-toast-message', component: OptToastMessageComponent },
  { path: 'opt-error-message', component: OptErrorMessageComponent },
  { path: 'opt-warning-message', component: OptWarningMessageComponent },
  { path: 'opt-success-message', component: OptSuccessMessageComponent },
  { path: 'opt-dispatch-add-new-address', component: OptDispatchAddNewAddressComponent },
  { path: 'opt-shipment-screen', component: OptShipmentScreenComponent },
  { path: 'opt-counter', component: OptCounterComponent },
  { path: 'opt-triple-toggle', component: OptTripleToggleComponent },
  { path: 'opt-double-toggle', component: OptDoubleToggleComponent },
  { path: 'opt-message-dialog', component: OptMessageDialogComponent },
  { path: 'opt-discount-cart', component: OptDiscountCartComponent },


  { path: '', redirectTo: '/opt-booking-summary', pathMatch: 'full' },
  { path: '**', redirectTo: '/opt-booking-summary', pathMatch: 'full' }

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
export class DemoMaterialModule { }

@NgModule({

  declarations: [
    Opt404Component,
    OptErrorPageComponent,
    OptLoadingScreenComponent,
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
    OptDataTableComponent,
    OptHostAddPopupComponent,
    OptAddNoteComponent,
    OptReprintPopupComponent,
    OptTaskPopupComponent,
    OptPackageSelectionModalComponent,
    OptSuccessComponent,
    OptModalPopoverComponent,
    OptTabbedPopoverComponent,
    OptDocumentPopoverComponent,
    OptInvoiceGeneratorComponent,
    OptQuestionnairePopupComponent,
    OptDocumentSelectPopupComponent,
    OptBookingDetailsFullPageComponent,
    OptItemCartComponent,
    OptToastMessageComponent,
    OptErrorMessageComponent,
    OptWarningMessageComponent,
    OptSuccessMessageComponent,
    OptItemModalPopoversComponent,
    OptDispatchAddNewAddressComponent,
    OptShipmentScreenComponent,
    OptCancelBookingComponent,
    OptCounterComponent,
    OptTripleToggleComponent,
    OptDoubleToggleComponent,
    OptMessageDialogComponent,
    OptDiscountSearchComponent,
    OptNormalSearchComponent,
    OptDiscountCartComponent,

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
    RouterModule.forRoot(appRoutes),
    NgxEditorModule,
    TooltipModule.forRoot(),
    NgxPopper,
    NgxPopperModule,
  ],

  entryComponents: [
    OptPopupModalComponent,
    OptPopupWindowComponent,
    OptClientPopupComponent,
    OptIndividualClientPopupComponent,
    OptPaymentModalComponent,
    OptPackagePopupComponent,
    OptItemPopupComponent,
    OptPackageCartComponent,
    OptDataTableComponent,
    OptCancelBookingComponent,
    OptDiscountSearchComponent
  ],

  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],

  bootstrap: [AppComponent],
})
export class AppModule { }

// platformBrowserDynamic().bootstrapModule(AppModule);//
