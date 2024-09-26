import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./vue/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },   {
    path: 'vehicule',
    loadComponent: () => import('./vue/vehicule/vehicule.page').then( m => m.VehiculePage)
  },
  {
    path: 'trajet',
    loadComponent: () => import('./vue/trajet/trajet.page').then( m => m.TrajetPage)
  },
  {
    path: 'propos',
    loadComponent: () => import('./vue/propos/propos.page').then( m => m.ProposPage)
  },
  {
    path: 'parametre',
    loadComponent: () => import('./vue/parametre/parametre.page').then( m => m.ParametrePage)
  }
 
];
