import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderonlyComponent } from './headeronly.component';

describe('HeaderonlyComponent', () => {
  let component: HeaderonlyComponent;
  let fixture: ComponentFixture<HeaderonlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderonlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderonlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
