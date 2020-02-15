import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTabsPage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomeTabsPage,
    children: [
      {
        path: 'discover',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./discover/tab.module').then(m => m.TabPageModule)
          }
        ]
      },
      {
        path: 'browse',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./browse/tab.module').then(m => m.TabPageModule)
          }
        ]
      },
      {
        path: 'library',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./library/tab.module').then(m => m.TabPageModule)
          }
        ]
      },
      {
        path: 'account',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./account/tab.module').then(m => m.TabPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/discover',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/discover',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeTabsPageRoutingModule {}
