import { Routes } from '@angular/router';
import { HomePage } from './vue/home/home.page';
import { routehome } from './home-routing.module';
import { TabPage } from './vue/tab/tab.page';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  },
  {
  path: 'tabs',
  component: TabPage,
  children: routehome
} ,
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
  },
  {
    path: 'parametre',
    loadComponent: () => import('./vue/parametre/parametre.page').then(m => m.ParametrePage)
  },
  {
    path: 'tab',
    loadComponent: () => import('./vue/tab/tab.page').then(m => m.TabPage)
  }
];
