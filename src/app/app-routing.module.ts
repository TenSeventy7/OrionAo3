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
    path: 'home',
    loadChildren: () => import('./screens/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home/tabs/discover',
    loadChildren: () => import('./screens/home/home.module').then( m => m.HomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
