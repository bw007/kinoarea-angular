import { Component, inject, input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

import { I18n } from "@core/services";
import { TranslocoDirective } from "@jsverse/transloco";
import { TuiStringHandler } from "@taiga-ui/cdk/types";
import { TuiIcon, TuiTextfield } from "@taiga-ui/core";
import { TuiChevron, TuiDataListWrapper, TuiSelect } from "@taiga-ui/kit";

import { type LangT } from "@core/services/i18n";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  imports: [
    TuiIcon,
    RouterLink,
    FormsModule,
    TuiChevron,
    TuiDataListWrapper,
    TuiSelect,
    TuiTextfield,
    TranslocoDirective
  ],
})
export class Footer {
  socials = input.required<any>();
  navItems = input.required<any>();
  
  protected readonly i18n = inject(I18n);
  protected stringify: TuiStringHandler<LangT> = (x) => x.title;
  
  protected readonly year = new Date().getFullYear();
}