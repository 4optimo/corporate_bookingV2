import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opt-paginator',
  templateUrl: './opt-paginator.component.html',
  styleUrls: ['./opt-paginator.component.scss']
})
export class OptPaginatorComponent implements OnInit {

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  // pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
  constructor() { }

  ngOnInit() {
  }

}
