import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CheckTutorial } from './providers/check-tutorial.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./screens/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'settings/main',
    loadChildren: () => import('./screens/settings/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./screens/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./screens/welcome/tutorial.module').then(m => m.TutorialModule),
    canLoad: [CheckTutorial]
  },
  {
    path: 'search',
    loadChildren: () => import('./screens/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'preview',
    loadChildren: () => import('./screens/work/preview/preview.module').then( m => m.PreviewPageModule)
  },
  {
    path: 'reader',
    loadChildren: () => import('./screens/work/reader/reader.module').then( m => m.ReaderPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./screens/user/detail/detail.module').then( m => m.DetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
