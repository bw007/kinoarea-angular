import { inject, Injectable, signal } from "@angular/core";

import { TranslocoService } from "@jsverse/transloco";
import { TuiLanguageSwitcherService } from '@taiga-ui/i18n/utils';

import { type TuiLanguageName } from "@taiga-ui/i18n/types";

export interface LangT {
  title: string;
  name: TuiLanguageName;
  code: string;
}

@Injectable({ providedIn: 'root' })
export class I18n {
  protected readonly switcher = inject(TuiLanguageSwitcherService);
  protected readonly translocoService = inject(TranslocoService);

  public readonly languages: LangT[] = [
    { title: 'English', name: 'english', code: 'en' },
    { title: 'Русский', name: 'russian', code: 'ru' },
    { title: '日本語', name: 'japan', code: 'jp' },
    { title: 'Türkçe', name: 'turkish', code: 'tr' },
  ];

  lang = signal<LangT>(this.languages[0]);

  constructor() {   
    const savedLang = localStorage.getItem('tuiLanguage');
    if (savedLang) {
      const lang = this.languages.find(l => l.name === savedLang);
      if (lang) this.setLang(lang);
    }
  }

  setLang(lang: LangT): void {
    this.lang.set(lang);
    this.switcher.setLanguage(lang.name);
    this.translocoService.setActiveLang(lang.code);
  }
}