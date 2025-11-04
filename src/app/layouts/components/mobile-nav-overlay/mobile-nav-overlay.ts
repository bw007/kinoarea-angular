import { Component, input, output, ViewEncapsulation } from "@angular/core";

import { TuiDialog, TuiButton } from '@taiga-ui/core';
import { TuiButtonClose} from '@taiga-ui/kit';
import { RouterLink } from "@angular/router";
  
@Component({
  selector: 'app-mobile-nav-overlay',
  templateUrl: './mobile-nav-overlay.html',
  styleUrl: './mobile-nav-overlay.less',
  imports: [
    TuiDialog,
    TuiButton,
    TuiButtonClose,
    RouterLink
  ],
  encapsulation: ViewEncapsulation.None
})
export class MobileNavOverlay {
  navItems = input.required<any>();
  
  menuOpen = input.required<boolean>();
  onMenuOpen = output<boolean>();  
}