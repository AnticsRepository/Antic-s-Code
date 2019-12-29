import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedArticlesBoxComponent } from './related-articles-box.component';

describe('RelatedArticlesBoxComponent', () => {
  let component: RelatedArticlesBoxComponent;
  let fixture: ComponentFixture<RelatedArticlesBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedArticlesBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedArticlesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
