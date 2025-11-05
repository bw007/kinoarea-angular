import { Component, signal } from "@angular/core";
import { TuiButton, TuiIcon } from "@taiga-ui/core";

import { FilmCard } from "@shared/components/film-card/film-card";
import { FilmT } from "@core/models";
import { translateSignal, TranslocoDirective } from "@jsverse/transloco";

@Component({
  selector: "app-home",
  templateUrl: "./home.html",
  imports: [TuiButton, TuiIcon, FilmCard, TranslocoDirective]
})
export class Home {
  protected readonly filterItems = signal([
    {
      title: translateSignal('home.filter_navs.all'),
      link: "/"
    },
    {
      title: translateSignal('home.filter_navs.action'),
      link: "/"
    },
    {
      title: translateSignal('home.filter_navs.adventure'),
      link: "/"
    },
    {
      title: translateSignal('home.filter_navs.comedy'),
      link: "/"
    },
    {
      title: translateSignal('home.filter_navs.scifi'),
      link: "/"
    },
    {
      title: translateSignal('home.filter_navs.drama'),
      link: "/"
    },
  ])
  filmData: FilmT[] = [
    {
      id: "1",
      title: "Escape from Pretoria",
      rating: 4.90, 
      year: 2020,
      genre: {
        en: ["Thriller", "Biography"],
        ru: ["Триллер", "Биография"],
        ja: ["スリラー", "伝記"],
        tr: ["Gerilim", "Biyografi"]
      },
      thumbnail: "films/film-1.png" 
    },
    {
      id: "2",
      title: "Плохие парни навсегда",
      rating: 6.50, 
      year: 2020,
      genre: {
        en: ["Action", "Comedy"],
        ru: ["Боевик", "Комедия"],
        ja: ["アクション", "コメディ"],
        tr: ["Aksiyon", "Komedi"]
      },
      thumbnail: "films/film-8.png" 
    },
    {
      id: "3",
      title: "Начало",
      rating: 7.60, 
      year: 2019,
      genre: {
        en: ["Drama", "Comedy"],
        ru: ["Драма", "Комедия"],
        ja: ["ドラマ", "コメディ"],
        tr: ["Dram", "Komedi"]
      },
      thumbnail: "films/film-3.png" 
    },
    {
      id: "4",
      title: "Однажды в... Голливуде",
      rating: 4.30, 
      year: 2010,
      genre: {
        en: ["Sci-Fi", "Action"],
        ru: ["Научная фантастика", "Боевик"],
        ja: ["SF", "アクション"],
        tr: ["Bilim Kurgu", "Aksiyon"]
      },
      thumbnail: "films/film-4.png" 
    }
  ]
}