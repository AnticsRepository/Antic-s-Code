import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PAGE_BG } from '@shared/data/app';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})

export class PageHeaderComponent implements OnInit {

  @Input() title: string;
  @Input() onNews = false;
  @Input() subTitle: string;
  background: string;
  bgs = PAGE_BG;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.background = this.getRoute();
  }

  private getRoute(): string {
    const route: string = this.route.snapshot.data.name;

    switch (route) {
      case 'About Me' : return this.bgs.about;
      case 'Advantages': return this.bgs.advantages;
      case 'Article': return this.bgs.article;
      case 'Articles': return this.bgs.articles;
      case 'Categories': return this.bgs.categories;
      case 'Collaborate': return this.bgs.collaborate;
      case 'Contact': return this.bgs.contact;
      case 'Create': return this.bgs.create;
      case 'Help': return this.bgs.help;
      case 'How it Works': return this.bgs.works;
      case 'Politics': return this.bgs.politics;
      case 'Profile': return this.bgs.profile;
      case 'Public Profile': return this.bgs.public;
      case 'Search': return this.bgs.search;
      case 'Support': return this.bgs.support;
      case 'Users': return this.bgs.users;
      case 'Test': return this.bgs.tests;
      case 'Single Test': return this.bgs.test;
      case 'News': return this.bgs.news;
      case 'Notice': return this.bgs.notice;
      default: return '';
    }
  }

}
