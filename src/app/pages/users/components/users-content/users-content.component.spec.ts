import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UsersContentComponent } from './users-content.component';

describe('UsersContentComponent', () => {
  let component: UsersContentComponent;
  let fixture: ComponentFixture<UsersContentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
