import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})

export class SectionComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() input: string;

  constructor() { }

  ngOnInit() {}

}
