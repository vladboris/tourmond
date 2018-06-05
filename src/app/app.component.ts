import { Component,
         OnInit} from '@angular/core';
import { } from '@angular/common';
import { Router } from '@angular/router';

import { phoneNumber } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public phoneNumber;
    constructor(private router: Router) {
        this.phoneNumber = phoneNumber;
    }

    ngOnInit() {
    }
}
