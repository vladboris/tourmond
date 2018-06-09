import { Component,
         OnInit} from '@angular/core';
import { } from '@angular/common';
import { Router } from '@angular/router';

import { phoneNumber,
         address,
         email
        } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public phoneNumber: string;
    public address: string;
    public email: string;
    constructor(private router: Router) {
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.email = email;
    }

    ngOnInit() {
    }
}
