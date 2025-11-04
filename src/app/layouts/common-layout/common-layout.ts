import { Component, computed, inject, signal } from "@angular/core";
import { Header } from "../components/header/header";
import { Responsive } from "@core/services";
import { View } from "@core/services/responsive";
import { MobileNavOverlay } from "../components/mobile-nav-overlay/mobile-nav-overlay";
import { Footer } from "@layouts/components/footer/footer";
import { RouterOutlet } from "@angular/router";
import { translateSignal } from "@jsverse/transloco";

@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.html',
  imports: [Header, MobileNavOverlay, Footer, RouterOutlet],
})
export class CommonLayout {
  private responsive = inject(Responsive);
  menuOpen = signal(false);

  protected view = View;

  currentView = computed(() => {
    if (this.responsive.isHandset()) return View.Handset;
    if (this.responsive.isTablet()) return View.Tablet;
    if (this.responsive.isLaptop()) return View.Laptop;
    return View.Desktop;
  });

  protected readonly socials = [
    {
      icon: "@tui.facebook",
      link: "/",
    },
    {
      icon: "@tui.instagram",
      link: "/",
    },
    {
      icon: "@tui.twitter",
      link: "/",
    },
    {
      icon: "@tui.youtube",
      link: "/",
    }
  ];

  protected readonly navItems = signal([
    {
      title: translateSignal('navigation.posters'),
      link: "/"
    },
    {
      title: translateSignal('navigation.media'),
      link: "/"
    },
    {
      title: translateSignal('navigation.movies'),
      link: "/"
    },
    {
      title: translateSignal('navigation.actors'),
      link: "/"
    },
    {
      title: translateSignal('navigation.news'),
      link: "/"
    },
    {
      title: translateSignal('navigation.collections'),
      link: "/"
    },
    {
      title: translateSignal('navigation.categories'),
      link: "/"
    },
  ])
}
