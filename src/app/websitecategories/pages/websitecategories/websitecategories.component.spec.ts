import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsitecategoriesComponent } from './websitecategories.component';

describe('WebsitecategoriesComponent', () => {
  let component: WebsitecategoriesComponent;
  let fixture: ComponentFixture<WebsitecategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsitecategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsitecategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
