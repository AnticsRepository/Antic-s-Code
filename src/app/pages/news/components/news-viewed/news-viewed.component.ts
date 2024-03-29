import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { News } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-news-viewed',
  templateUrl: './news-viewed.component.html',
  styleUrls: ['./news-viewed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NewsViewedComponent {

  @Input() news: News[];

  constructor() { }

}
