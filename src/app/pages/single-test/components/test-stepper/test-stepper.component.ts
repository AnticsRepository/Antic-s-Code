import { Component, Input, OnInit } from '@angular/core';
import { TestEntry, TestRequest } from '@shared/interfaces/interfaces';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

import { UserService } from '@core/services/user/user.service';
import { TestFacade } from '@store/test/test.facade';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-stepper',
  templateUrl: './test-stepper.component.html',
  styleUrls: ['./test-stepper.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})

export class TestStepperComponent implements OnInit {

  orientation: string;
  selected: StepSelector[];
  @Input() entry: TestEntry;

  constructor(
    private userSrv: UserService,
    private testFacade: TestFacade,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.selected = this.makeStepSelector();
  }

  public makeStepSelector(): StepSelector[] {
    return new Array<StepSelector>(this.entry.questions.length).fill({key: null});
  }

  public finish(): void {
    const result = JSON.parse(JSON.stringify(this.selected));
    result.forEach((s: StepSelector) => delete s.value);

    const request: TestRequest = {
      uid: this.entry.uid,
      title: this.entry.title,
      category: this.entry.category,
      user: this.userSrv.getUser()._id || null,
      level: this.entry.level,
      request: result
    };

    this.testFacade.saveRequest(request);
  }

  public trackByIdx(index: number): number {
    return index;
  }

}

interface StepSelector {
  key: string;
  value?: string;
}
