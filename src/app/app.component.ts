import {
    Component, Input,
    OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from './services/httpclient.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { NgbdModalTerms } from './modal-terms-conditions/modal-terms-conditions.component'

import { phoneNumber,
         address,
         email,
         instagram,
         facebook,
         skype,
} from './constants';

interface Terms {
    title: string,
    text: string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    // contact information
    public phoneNumber: Array<string>;
    public address: string;
    public email: string;
    // social media
    public instagram: string;
    public facebook: string;
    public skype: string;

    public terms: Terms;
    private modalRef: any;

    constructor(private router: Router,
                private http : HttpClientService,
                private modalService: NgbModal) {
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.email = email;

        this.instagram = instagram;
        this.facebook = facebook;
        this.skype = skype;
    }

    ngOnInit() {
        this.http.fetch('./assets/t&c.json').subscribe( (data: Terms) => { this.terms = data; });
    }

    public openModal(terms): void {
        this.modalRef = this.modalService.open(NgbdModalTerms, { size: 'lg' });
        this.modalRef.componentInstance.title = terms.title;
        this.modalRef.componentInstance.text = terms.text;
    }
}
