import { Routes } from '@angular/router';
import { CommonLayout } from '@layouts/common-layout/common-layout';
import { MainLayout } from '@layouts/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: CommonLayout,
    children: [
      {
        path: '',
        component: MainLayout
      }
    ]
  }
];
