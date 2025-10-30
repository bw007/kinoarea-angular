import { computed, inject, Injectable } from "@angular/core";
import { BreakpointObserver } from "@angular/cdk/layout";
import { toSignal } from "@angular/core/rxjs-interop";

export enum View {
  Desktop,
  Laptop,
  Tablet,
  Handset
}

@Injectable({ providedIn: 'root' })
export class Responsive {
  private breakpointObserver = inject(BreakpointObserver);

  private handset$ = this.breakpointObserver.observe(['(max-width: 767.98px)']);
  private tablet$ = this.breakpointObserver.observe(['(min-width: 768px) and (max-width: 1023.98px)']);
  private laptop$ = this.breakpointObserver.observe(['(min-width: 1024px) and (max-width: 1279.98px)'])
  private desktop$ = this.breakpointObserver.observe(['(min-width: 1280px)']);

  handset = toSignal(this.handset$, { initialValue: { matches: false, breakpoints: {} } });
  tablet = toSignal(this.tablet$, { initialValue: { matches: false, breakpoints: {} } });
  laptop = toSignal(this.laptop$, { initialValue: { matches: false, breakpoints: {} } })
  desktop = toSignal(this.desktop$, { initialValue: { matches: false, breakpoints: {} } });

  isHandset = computed(() => this.handset()?.matches ?? false);
  isTablet = computed(() => this.tablet()?.matches ?? false);
  isLaptop = computed(() => this.laptop()?.matches ?? false);
  isDesktop = computed(() => this.desktop()?.matches ?? false);
}