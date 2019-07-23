import { Component, OnInit,
         Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dashslider',
  templateUrl: './dashslider.component.html',
  styleUrls: ['./dashslider.component.scss']
})
export class DashSliderComponent  implements OnInit {
  @Output() seeTripsClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickSeeTrips() : void {
    this.seeTripsClick.emit();
  }

}
