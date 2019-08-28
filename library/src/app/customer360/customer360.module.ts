import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { AppModule } from '../app.module'
import { Customer360RoutingModule } from './customer360-routing.module';
import { TestComponentComponent } from './test-component/test-component.component';

@NgModule({
  imports: [
    CommonModule,
    Customer360RoutingModule
    //AppModule
  ],
  declarations: [TestComponentComponent],
  exports: [TestComponentComponent]
})
export class Customer360Module { }
