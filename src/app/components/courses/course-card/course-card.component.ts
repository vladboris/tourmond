import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { HttpClientService } from '../../../services/httpclient.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { email } from '../../../constants';

@Component({
    selector: 'ngbd-modal-content',
    template: `
    <div class="modal-header">
      <h4 class="modal-title">{{ title }}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <img class="featured-img mb-2" [src]="'../assets/images/' + img">
      <p class="content" [innerHTML]="content"></p>
    </div>
    <div class="modal-footer">
      <!--<button type="button" class="pull-left btn btn-info font-weight-bold text-uppercase " 
              routerLink="/apply" (click)="activeModal.close('Close click')">Join</button>-->
        <a class="pull-left btn btn-info font-weight-bold text-uppercase"
                [href]="'mailto:' + email">Contact</a>
      <button type="button" class="btn btn-outline-secondary" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `,
  styles: [`    
        .modal-header,
        .modal-body,
        .modal-footer {
            background-color: #e4ebf0;
        }
        .modal-header {
            border-bottom: 1px solid #e0e6e9;
        }
        .modal-footer {
            border-top: 1px solid #e0e6e9;
        }
        .featured-img {
            width: 100%;
            height: 400px;
        }
  `]
})
export class NgbdModalContent {
    @Input() title : string;
    @Input() content: string;
    @Input() img: string;

    public email: string;
    constructor(public activeModal: NgbActiveModal) {
        this.email = email;
    }
}

interface Cards {
  cards: Array<Course>
}

interface Course {
  name: string,
  country: string,
  img: string,
  details?: object
}

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  @ViewChild("trips") trips: ElementRef;
  public cards : Array<Course>;
  private modalRef: any;

  constructor(private http : HttpClientService,
              private modalService: NgbModal ) {}

  ngOnInit() {
      this.http.fetch('./assets/coursecards.json').subscribe( (data: Cards) => { this.cards = data.cards; });
  }

  public openModal(card): void {
        this.modalRef = this.modalService.open(NgbdModalContent, { size: 'lg' });
        this.modalRef.componentInstance.title = card.details.title;
        this.modalRef.componentInstance.content = card.details.content;
        this.modalRef.componentInstance.img = card.img;
    }

  public focus() : void {
      this.trips.nativeElement.focus();
  }
}
