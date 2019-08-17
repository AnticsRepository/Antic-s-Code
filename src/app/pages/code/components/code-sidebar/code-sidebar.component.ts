import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CODE_TAGS } from '@app/shared/shared.data';

@Component({
  selector: 'app-code-sidebar',
  templateUrl: './code-sidebar.component.html',
  styleUrls: ['./code-sidebar.component.scss']
})

export class CodeSidebarComponent implements OnInit {

  @Output() tag: EventEmitter<string> = new EventEmitter<string>();
  codeTags = CODE_TAGS;

  constructor() { }

  ngOnInit() { }

  filter(tag: string): void {
    this.tag.emit(tag);
    window.dispatchEvent(new Event('resize'));
  }

}
