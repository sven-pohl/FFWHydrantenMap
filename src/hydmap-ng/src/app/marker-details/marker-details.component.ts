import { Component, Input, OnInit } from '@angular/core';
import { Hydrant } from '../classes/hydrant';



@Component({
  selector: 'app-marker-details',
  templateUrl: './marker-details.component.html',
  styleUrls: ['./marker-details.component.sass']
})
export class MarkerDetailsComponent implements OnInit {

  @Input() hydrant?: Hydrant;
  constructor() { }

  ngOnInit(): void {
    console.log(this.hydrant);
  }

}
