import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProfileActionsComponent } from './profile-actions.component';

describe('ProfileActionsComponent', () => {
  let component: ProfileActionsComponent;
  let fixture: ComponentFixture<ProfileActionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
