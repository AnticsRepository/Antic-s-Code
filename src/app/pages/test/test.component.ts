import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Test } from '@shared/interfaces/interfaces';
import { TestFacade } from '@store/test/test.facade';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})

export class TestComponent implements OnInit, OnDestroy {

  tests$: Observable<Test[]>;
  private unsubscribe$ = new Subject<void>();

  constructor(private testFacade: TestFacade) { }

  ngOnInit() {
    this.tests$ = this.testFacade.tests$;
    this.checkData();
  }

  private checkData(): void {
    this.testFacade.loaded$
     .pipe(
       filter(res => !res),
       takeUntil(this.unsubscribe$)
      )
     .subscribe(_ => this.testFacade.get());
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.testFacade.reset();
  }

}
