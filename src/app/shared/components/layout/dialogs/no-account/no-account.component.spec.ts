import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NoAccountComponent } from './no-account.component';

describe('NoAccountComponent', () => {
  let component: NoAccountComponent;
  let fixture: ComponentFixture<NoAccountComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NoAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
