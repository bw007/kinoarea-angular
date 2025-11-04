import { TuiRoot } from "@taiga-ui/core";
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { I18n } from "@core/services/i18n";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot],
  template: `
    <tui-root>
        <router-outlet />
    </tui-root>
  `
})
export class App {
  i18n = inject(I18n)
}
