import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponentComponent } from './test-component/test-component.component';
const routes: Routes = [
  {
    path: 'test-component',
    component: TestComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Customer360RoutingModule { }
