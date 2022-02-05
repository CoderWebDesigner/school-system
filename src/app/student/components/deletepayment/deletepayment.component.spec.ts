import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletepaymentComponent } from './deletepayment.component';

describe('DeletepaymentComponent', () => {
  let component: DeletepaymentComponent;
  let fixture: ComponentFixture<DeletepaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletepaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
