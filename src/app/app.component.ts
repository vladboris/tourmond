import { Component,
         OnInit} from '@angular/core';
import { } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public phoneNumber;
    constructor(private router: Router) {
        this.phoneNumber = '+2223333333';
    }

    ngOnInit() {
    }
}
