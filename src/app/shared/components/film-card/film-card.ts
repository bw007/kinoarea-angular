import { Component, inject, input } from "@angular/core";

import { TuiChip } from "@taiga-ui/kit";

import type { FilmT } from "@core/models";
import { I18n } from "@core/services";
import { TuiButton } from "@taiga-ui/core";
import { TranslocoDirective } from "@jsverse/transloco";

@Component({
  selector: "app-film-card",
  templateUrl: "./film-card.html",
  imports: [TuiChip, TuiButton, TranslocoDirective]
})
export class FilmCard {
  private i18n = inject(I18n);
  readonly filmData = input.required<FilmT>();

  protected currentLang = this.i18n.lang.asReadonly();

}