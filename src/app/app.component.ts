import { Component,
         OnInit} from '@angular/core';
import { } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private phoneNumber;
    constructor() {
        this.phoneNumber = '+2243341624';
    }

    ngOnInit() {
    }
}
