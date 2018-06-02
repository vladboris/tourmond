import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  public contactNumber: string;

  constructor() {
    this.contactNumber = '+1 (222) 333-4444';
  }

  ngOnInit() {
  }

}
