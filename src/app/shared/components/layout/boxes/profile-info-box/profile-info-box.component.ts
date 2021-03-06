import { Component, Input } from '@angular/core';
import { User } from '@shared/interfaces/interfaces';
import { SOCIAL_PROFILE, TOTAL_USER_DATA } from '@shared/data/user';

@Component({
  selector: 'app-profile-info-box',
  templateUrl: './profile-info-box.component.html',
  styleUrls: ['./profile-info-box.component.scss']
})

export class ProfileInfoBoxComponent {

  @Input() user: User;
  social = SOCIAL_PROFILE;
  total = TOTAL_USER_DATA;
  showEmail: boolean;

  constructor() { }

}
