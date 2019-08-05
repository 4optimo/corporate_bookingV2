import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'customer360',
    loadChildren: './customer360/customer360.module#customer360Module'
  },
  {
    path: 'corporate-booking',
    loadChildren: './app.module#AppModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
