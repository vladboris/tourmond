import { Component, OnInit } from '@angular/core';

import { phoneNumber } from '../../constants';

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
  public formInvalid: boolean;
  public formSubmitted: boolean;

  constructor(formBuilder: FormBuilder) {
    this.contactNumber = phoneNumber;

    this.contactForm = formBuilder.group({
        'name': ['', Validators.required],
        'email': ['', Validators.required],
        'subject': ['', Validators.required],
        'text': ['', Validators.required]
    });

    this.name = this.contactForm.controls['name'];
    this.email = this.contactForm.controls['email'];
    this.subject = this.contactForm.controls['subject'];
    this.text = this.contactForm.controls['text'];

    this.invalidAlert = false;
    this.formInvalid = false;
    this.formSubmitted = false;
  }

  ngOnInit() {

  }

  public onSubmit(form: any): void {
      if(form.invalid) {
          this.formInvalid = true;
          this.invalidAlert = true;

          setTimeout(() => {
              this.invalidAlert = false;
              }, 5000);
      } else {
          this.formInvalid = false;
          this.invalidAlert = false;
          this.formSubmitted = true;
          setTimeout(() => {
              this.formSubmitted = false;
          }, 10000);

      // Form Submit Logic
        form.reset();
      }
  }
}
