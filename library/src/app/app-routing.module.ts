import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OptBookingEditLayoutComponent } from './opt-booking-edit-layout/opt-booking-edit-layout.component';
const routes: Routes = [
  // {
  //   path: 'customer360',
  //   loadChildren: './customer360/customer360.module#customer360Module'
  // },
  {
    path: 'corporate-booking',
    loadChildren: './app.module#AppModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'booking-edit-layout',
    component: OptBookingEditLayoutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
