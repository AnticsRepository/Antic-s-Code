import { ChangeDetectionStrategy, Component } from '@angular/core';
import { COUNTRIES } from '@shared/data/home';

@Component({
  selector: 'app-liked-home-list',
  templateUrl: './liked-home-list.component.html',
  styleUrls: ['./liked-home-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LikedHomeListComponent {

  countries = COUNTRIES;

  constructor() { }

}
