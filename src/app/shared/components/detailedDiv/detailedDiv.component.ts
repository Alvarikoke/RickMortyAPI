import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailedDiv',
  templateUrl: './detailedDiv.component.html',
  styleUrls: ['./detailedDiv.component.css']
})
export class DeailedDivComponent implements OnInit {

  @Input() data: any[] = [];
  @Input() typeData!: string;

  constructor() {}

  ngOnInit(): void {
  }

}
