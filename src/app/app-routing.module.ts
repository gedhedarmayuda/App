import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'details1',
    loadChildren: () => import('./details1/details1.module').then( m => m.Details1PageModule)
  },
  {
    path: 'details2',
    loadChildren: () => import('./details2/details2.module').then( m => m.Details2PageModule)
  },
  {
    path: 'details3',
    loadChildren: () => import('./details3/details3.module').then( m => m.Details3PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
