import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTermsConditionsComponent } from './modal-terms-conditions.component';

describe('ModalTermsConditionsComponent', () => {
  let component: ModalTermsConditionsComponent;
  let fixture: ComponentFixture<ModalTermsConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTermsConditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTermsConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
