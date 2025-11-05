import { Routes } from '@angular/router';
import { Home } from '@features/home/home';
import { CommonLayout } from '@layouts/common-layout/common-layout';
import { MainLayout } from '@layouts/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: CommonLayout,
    children: [
      {
        path: '',
        component: MainLayout,
        children: [
          {
            path: '',
            component: Home
          }
        ]
      }
    ]
  }
];
