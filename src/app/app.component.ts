import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';

import { StorageService } from '@core/storage/storage.service';
import { CrafterService } from '@core/services/crafter/crafter.service';
import { PushService } from '@core/services/push/push.service';
import { SocketService } from '@core/sockets/services/socket.service';
import { UsersFacade } from '@store/users/users.facade';
import { ThemeService } from '@core/services/theme/theme.service';

import { LanguageSnackComponent } from '@layout/snackbars/language-snack/language-snack.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  loaded = false;

  constructor(
    private ls: StorageService,
    private crafter: CrafterService,
    private theme: ThemeService,
    private sw: PushService,
    private usersFacade: UsersFacade,
    public socket: SocketService
  ) { }

  ngOnInit() {
    window.onload = () => this.onLoad();
    this.checkUserToken();
    this.setTheme();
  }

  private onLoad(): void {
    const app = document.getElementById('app');
    app.classList.remove('hide');

    this.loaded = true;
    this.sw.updateSW();
    this.openLanguageSnack();
    if (environment.maintenance) { this.showMaintenance(); }
  }

  private checkUserToken(): void {
    if (this.ls.get('token')) { this.usersFacade.verifyToken(); }
  }

  private openLanguageSnack(): void {
    const lang = this.ls.get('lang') !== 'es';
    const skip = this.ls.get('skip_lang');

    if (lang || skip) { return; }
    setTimeout(() => {
      this.crafter.snack(LanguageSnackComponent, -1);
    }, 8000);
  }

  private setTheme(): void {
    this.theme.set(this.ls.get('theme'));
  }

  private showMaintenance(): void {
    setTimeout(() => {
      this.crafter.modal('MODALS.MAINTENANCE.TITLE',
                         'MODALS.MAINTENANCE.MESSAGE',
                         'info');
    }, 4000);
  }

}


