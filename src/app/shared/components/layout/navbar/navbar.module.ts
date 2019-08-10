import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { NavBarComponent } from './navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavBarSearchComponent } from './components/navbar-search/navbar-search.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';

@NgModule({
  declarations: [
    NavBarComponent,
    MenuComponent,
    NavBarSearchComponent,
    MobileMenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    NavBarComponent
  ]
})

export class NavbarModule { }
