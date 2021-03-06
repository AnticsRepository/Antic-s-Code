import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { takeUntil, filter } from 'rxjs/operators';
import { ArticlesFacade } from '@store/articles/article.facade';

@Component({
  selector: 'app-articles-sort-bar',
  templateUrl: './articles-sort-bar.component.html',
  styleUrls: ['./articles-sort-bar.component.scss']
})

export class ArticlesSortBarComponent implements OnInit {

  @Output() grid = new EventEmitter<boolean>();
  @Input() active = false;
  count$: Observable<number>;

  constructor(private articleFacade: ArticlesFacade) { }

  ngOnInit() {
    this.count$ = this.articleFacade.count$;
  }

  public sort(): void {
    this.active = !this.active;
    this.grid.emit(this.active);
  }

}
