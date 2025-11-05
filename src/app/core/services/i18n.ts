import { inject, Injectable, signal } from "@angular/core";

import { TranslocoService } from "@jsverse/transloco";
import { TuiLanguageSwitcherService } from '@taiga-ui/i18n/utils';

import { type TuiLanguageName } from "@taiga-ui/i18n/types";

enum langCode {
  En = 'en',
  Ru = 'ru',
  Ja = 'ja',
  Tr = 'tr'
}

export interface LangT {
  title: string;
  name: TuiLanguageName;
  code: langCode;
}

@Injectable({ providedIn: 'root' })
export class I18n {
  protected readonly switcher = inject(TuiLanguageSwitcherService);
  protected readonly translocoService = inject(TranslocoService);

  public readonly languages: LangT[] = [
    { title: 'English', name: 'english', code: langCode.En },
    { title: 'Русский', name: 'russian', code: langCode.Ru },
    { title: '日本語', name: 'japan', code: langCode.Ja },
    { title: 'Türkçe', name: 'turkish', code: langCode.Tr },
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