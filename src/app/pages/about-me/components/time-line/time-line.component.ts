import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { AOS_SETTINGS } from '@shared/data/app';
import { TIME_LINE } from '@shared/data/me';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss']
})

export class TimeLineComponent implements OnInit {

  constructor() { }

  TL = TIME_LINE;

  ngOnInit() {
    AOS.init(AOS_SETTINGS);
  }

  public scroll(box: string): void {
    const el = document.getElementById(box);
    if (el) { el.scrollIntoView({ behavior: 'auto', block: 'start' }); }
  }

}
