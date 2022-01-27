import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsitecategoryComponent } from './websitecategory.component';

describe('WebsitecategoryComponent', () => {
  let component: WebsitecategoryComponent;
  let fixture: ComponentFixture<WebsitecategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsitecategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsitecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
