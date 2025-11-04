import { provideEventPlugins } from "@taiga-ui/event-plugins";
import { provideAnimations } from "@angular/platform-browser/animations";
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { tuiLanguageSwitcher } from "@taiga-ui/i18n/utils";
import { TuiLanguageName } from "@taiga-ui/i18n/types";

import { provideHttpClient } from '@angular/common/http';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@jsverse/transloco';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideEventPlugins(),
    tuiLanguageSwitcher(async (language: TuiLanguageName): Promise<unknown> => {
      switch (language) {
        case 'russian':
          return import('@taiga-ui/i18n/languages/russian');
        case 'japan':
          return import('@taiga-ui/i18n/languages/japan');
        case 'turkish':
          return import('@taiga-ui/i18n/languages/turkish');

        default:
          return import('@taiga-ui/i18n/languages/english');
      }
    }), provideHttpClient(), provideTransloco({
      config: {
        availableLangs: ['en', 'ru', 'ja', 'tr'],
        defaultLang: 'en',
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        fallbackLang: 'en',
        missingHandler: {
          allowEmpty: true,
          logMissingKey: true,
          useFallbackTranslation: true,
        },
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader
    })
  ]
};
