import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClientService } from '../../services/httpclient.service';

import { IContactForm } from '../../models/models';

import { phoneNumber } from '../../constants';
import { aws_service_contactform } from '../../constants';

import {  FormControl,
          FormGroup,
          FormBuilder,
          Validators,
          AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  public contactNumber: string;
  public contactForm: FormGroup;

  public name: AbstractControl;
  public email: AbstractControl;
  public subject: AbstractControl;
  public text: AbstractControl;

  public invalidAlert: boolean;
  public invalidRequest: boolean;
  public formInvalid: boolean;
  public formSubmitted: boolean;

  constructor(private formBuilder: FormBuilder,
              private http : HttpClientService) {
    this.contactNumber = phoneNumber;
  }

  ngOnInit() {
      this.contactForm = this.formBuilder.group({
          'name': [''],
          'email': [''],
          'subject': [''],
          'text': [''],
      });

      this.name = this.contactForm.controls['name'];
      this.email = this.contactForm.controls['email'];
      this.subject = this.contactForm.controls['subject'];
      this.text = this.contactForm.controls['text'];

      this.invalidAlert = false;
      this.formInvalid = false;
      this.formSubmitted = false;
      this.invalidRequest = false;
  }

  public onSubmit(): void {
      if(this.contactForm.invalid) {
          this.invalidRequest = false;
          this.formInvalid = true;
          this.invalidAlert = true;
          this.contactForm.reset();
      } else if(this.contactForm.valid) {
          this.invalidRequest = false;
          this.formInvalid = false;
          this.invalidAlert = false;

          let httpOptions = {
              headers: new HttpHeaders({
                  'Content-Type': 'application/json',
              }),
              responseType: 'text',
          };
          let body: IContactForm = {
              name: this.name.value,
              email: this.email.value,
              subject: this.subject.value,
              text: this.text.value,
          };

          this.http.post(`${aws_service_contactform}/v1/contactform`,
                            JSON.stringify(body),
                            httpOptions
          ).subscribe( (res: any) => {
              console.log(res);

              this.formSubmitted = true;
              this.contactForm.reset();
          }, (err) => {
              this.invalidRequest = true;
              this.contactForm.reset();
          });
      }
  }
}
