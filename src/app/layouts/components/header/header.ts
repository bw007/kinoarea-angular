import { Component, computed, input, output } from "@angular/core";
import { TuiButton, TuiIcon } from "@taiga-ui/core";
import { RouterLink } from "@angular/router";
import { View } from "@core/services/responsive";

@Component({
  selector: "app-header",
  templateUrl: "./header.html",
  imports: [TuiButton, TuiIcon, RouterLink],
})
export class Header {
  socials = input.required<any>();
  navItems = input.required<any>();

  readonly currentView = input.required<View>();
  onMenuOpen = output<boolean>();

  readonly btnSize = computed(() => {
    if (this.currentView() === View.Handset) return 's';
    if (this.currentView() === View.Tablet) return 'm';
    if (this.currentView() === View.Handset) return 'm';
    return 'l';
  })
}