import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditattachmentComponent } from './editattachment.component';

describe('EditattachmentComponent', () => {
  let component: EditattachmentComponent;
  let fixture: ComponentFixture<EditattachmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditattachmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditattachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
