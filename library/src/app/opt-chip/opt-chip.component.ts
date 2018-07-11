import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-opt-chip',
  templateUrl: './opt-chip.component.html',
  styleUrls: ['./opt-chip.component.scss']
})

export class OptChipComponent implements OnInit {

  hideComponent: string;

  isOpen() {
    this.hideComponent = "hideChip";
    console.log("button clicked");
  }
  constructor() {
  }
  // myGroup:FormGroup;
  // disabled = false;
  // ShowFilter = false;
  // limitSelection = false;
  // cities= [];
  // selectedItems = [];
  // dropdownSettings: any = {};
  //
  // constructor(private fb: FormBuilder) {}

  cities = [];
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  ngOnInit(){

      this.cities = [
        { item_id: 1, item_text: 'Mumbai' },
        { item_id: 2, item_text: 'Bangaluru' },
        { item_id: 3, item_text: 'Pune' },
        { item_id: 4, item_text: 'Navsari' },
        { item_id: 5, item_text: 'New Delhi' }
      ];
      this.selectedItems = [
        { item_id: 3, item_text: 'Pune' },
        { item_id: 4, item_text: 'Navsari' }
      ];
      this.dropdownSettings = {
        singleSelection: false,
        idField: 'item_id',
        textField: 'item_text',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 3,
        allowSearchFilter: true
      };
    // this.myGroup = this.fb.group({
    //   city: [this.selectedItems]
    // });
  }
  onItemSelect(item:any){
    console.log('onItemSelect', item);
  }
  onSelectAll(items: any){
    console.log('onSelectAll', items);
  }
  // toogleShowFilter() {
  //   this.ShowFilter = !this.ShowFilter;
  //   this.dropdownSettings = Object.assign({}, this.dropdownSettings, { allowSearchFilter: this.ShowFilter });
  // }
  //
  // handleLimitSelection() {
  //   if (this.limitSelection) {
  //     this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: 2 });
  //   } else {
  //     this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: null });
  //   }
  // }
}

