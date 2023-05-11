import { Component, Input, OnInit } from '@angular/core';
import { TypeData } from 'src/app/interfaces/commons.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() data: any;
  @Input() typeData!: TypeData;

   constructor() {}

  ngOnInit(): void {
  }

  get TypeData(){
    return TypeData;
  }

}
