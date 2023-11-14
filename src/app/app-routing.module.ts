import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home/:fortnite',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'acceso',
    pathMatch: 'full'
  },
  {
    path: 'acceso',
    loadChildren: () => import('./acceso/acceso.module').then( m => m.AccesoPageModule)
  },
  {
    path: 'recordar',
    loadChildren: () => import('./recordar/recordar.module').then( m => m.RecordarPageModule)
  },
  {
    path: 'registrar/:dato',
    loadChildren: () => import('./registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'api-rest',
    loadChildren: () => import('./api-rest/api-rest.module').then( m => m.ApiRestPageModule)
  },
  {
    path: 'api-rest',
    loadChildren: () => import('./api-rest/api-rest.module').then( m => m.ApiRestPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
