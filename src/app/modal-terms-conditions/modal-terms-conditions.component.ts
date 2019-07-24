import {Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'ngbd-modal-terms',
    template: `
    <div class="modal-header">
      <h4 class="modal-title">{{ title }}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p class="content" [innerHTML]="text"></p>
    </div>
    <div class="modal-footer">
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
  `]
})
export class NgbdModalTerms {
    @Input() title : string;
    @Input() text: string;

    constructor(public activeModal: NgbActiveModal) {
    }
}