import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteattachmentComponent } from './deleteattachment.component';

describe('DeleteattachmentComponent', () => {
  let component: DeleteattachmentComponent;
  let fixture: ComponentFixture<DeleteattachmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteattachmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteattachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
