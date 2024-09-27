import { Routes } from '@angular/router';

export const routehome: Routes = [
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./vue/home/home.page').then(m => m.HomePage)
  },
  {
    path: 'vehicule',
    loadComponent: () => import('./vue/vehicule/vehicule.page').then(m => m.VehiculePage)
  },
  {
    path: 'trajet',
    loadComponent: () => import('./vue/trajet/trajet.page').then(m => m.TrajetPage)
  },
  {
    path: 'propos',
    loadComponent: () => import('./vue/propos/propos.page').then(m => m.ProposPage)
  }
]
