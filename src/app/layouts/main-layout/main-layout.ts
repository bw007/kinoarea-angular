import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterOutlet, RouterLinkWithHref } from "@angular/router";
import { TranslocoDirective } from "@jsverse/transloco";

import { type TuiDay } from "@taiga-ui/cdk/date-time";
import { TuiTextfield, TuiButton } from "@taiga-ui/core";
import { TuiCheckbox } from "@taiga-ui/kit";
import { TuiCard } from '@taiga-ui/layout';

@Component({
  selector: "app-main-layout",
  templateUrl: "./main-layout.html",
  imports: [RouterOutlet, TuiCard, TuiTextfield, FormsModule, TuiButton, TuiCheckbox, RouterLinkWithHref, TranslocoDirective],
})
export class MainLayout {
  protected email = "";

  protected value: TuiDay | null = null;

  protected onDayClick(day: TuiDay): void {
    this.value = day;
  }
}