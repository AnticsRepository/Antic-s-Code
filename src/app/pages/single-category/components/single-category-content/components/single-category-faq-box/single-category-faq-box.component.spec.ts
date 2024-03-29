import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SingleCategoryFaqBoxComponent } from './single-category-faq-box.component';

describe('SingleCategoryFaqBoxComponent', () => {
  let component: SingleCategoryFaqBoxComponent;
  let fixture: ComponentFixture<SingleCategoryFaqBoxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCategoryFaqBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCategoryFaqBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
