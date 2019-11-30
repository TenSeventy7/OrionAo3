import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./screens/settings/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./screens/about/about.module').then( m => m.AboutPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
