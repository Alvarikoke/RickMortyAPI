import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TablaComponent implements OnInit {

  @Input() data: any[] = [];
  @Input() typeData!: string;

  constructor() {}

  ngOnInit(): void {
  }

}
