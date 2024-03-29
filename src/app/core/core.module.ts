import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';

import {
  CORE_MODULE_CONSTANTS,
  CORE_MODULE_CONFIG,
  createTranslateLoader
} from './core.module.config';

import { APP_CONSTANTS } from '../app.config';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { LanguageModule } from './language/language.module';
import { ErrorHandlerService } from '@core/error-handler/error-handler.service';

import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './services/http/jwt.interceptor';

import { StorageModule } from './storage/storage.module';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { DISQUS_SHORTNAME } from 'ngx-disqus';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ArticleEffects } from './ngrx/articles/article.effects';
import { UserEffects } from './ngrx/users/user.effects';
import { SearchEffects } from './ngrx/search/search.effects';
import { StatsEffects } from './ngrx/stats/stats.effects';
import { reducers } from './ngrx/ngrx.index';

import { ToastrModule } from 'ngx-toastr';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { NgMarkdownModule } from './markdown/markdown.module';
import { SocketsModule } from './sockets/sockets.module';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { RecaptchaModule } from 'ng-recaptcha';
import { RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { environment } from '@env/environment';

const Material = [
  MatSnackBarModule,
  MatBottomSheetModule
];

@NgModule({
  imports: [
    CommonModule,
    StorageModule,
    LoadingBarModule,
    NgMarkdownModule,
    SocketsModule,
    LoadingBarHttpClientModule,
    NgxWebstorageModule.forRoot(CORE_MODULE_CONSTANTS.WEBSTORAGE_CONFIG),
    StoreModule.forFeature('AppState', reducers),
    EffectsModule.forRoot([
      ArticleEffects,
      UserEffects,
      SearchEffects,
      StatsEffects
    ]),
    LanguageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ...Material
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: CORE_MODULE_CONFIG, useValue: CORE_MODULE_CONSTANTS },
    { provide: ErrorHandler, useClass: ErrorHandlerService },
    { provide: DISQUS_SHORTNAME, useValue: APP_CONSTANTS.DISQUS },
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: { siteKey: environment.captcha } as RecaptchaSettings,
    },
  ],
  exports: [LoadingBarModule]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded.');
    }
  }
}
