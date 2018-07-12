import { Component } from '@angular/core';



@Component({
  selector: 'app-opt-adv-price-edit',
  templateUrl: './opt-adv-price-edit.component.html',
  styleUrls: ['./opt-adv-price-edit.component.scss']
})
export class OptAdvPriceEditComponent  {
  displayedColumns = ['package', 'price', 'net', 'tax', 'gross', 'margin', 'estimated', 'cost', 'actual'];
  dataSource = ELEMENT_DATA;
}

export interface Element {
  package: string;
  price: number;
  net: number;
  tax: number;
  gross: number;
  margin: number;
  estimated: number;
  cost: number;
  actual: number;
}

const ELEMENT_DATA: Element[] = [
  {package: 'data', price: 92.59, net: 1.0079, tax: 92.59, gross: 92.59, margin: 92.59, estimated: 92.59, cost: 92.59, actual: 92.59},
];
