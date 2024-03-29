import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutIntroComponent } from './about-intro.component';

describe('AboutIntroComponent', () => {
  let component: AboutIntroComponent;
  let fixture: ComponentFixture<AboutIntroComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
