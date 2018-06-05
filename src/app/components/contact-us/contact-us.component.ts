import { Component, OnInit } from '@angular/core';

import { phoneNumber } from '../../constants';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  public contactNumber: string;

  constructor() {
    this.contactNumber = phoneNumber;
  }

  ngOnInit() {
  }

}
