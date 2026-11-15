import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'breeds',
    pathMatch: 'full',
  },
  {
    path: 'breeds',
    loadComponent: () => import('./tab1/tab1.page').then((m) => m.Tab1Page),
  },
  {
    path: 'breeds/:id',
    loadComponent: () => import('./breed-details/breed-details.page').then((m) => m.BreedDetailsPage),
  },
  {
    path: 'favourites',
    loadComponent: () => import('./tab2/tab2.page').then((m) => m.Tab2Page),
  },
  {
    path: 'favourites/:id',
    loadComponent: () => import('./breed-details/breed-details.page').then((m) => m.BreedDetailsPage),
  },
  {
    path: 'random',
    loadComponent: () => import('./tab3/tab3.page').then((m) => m.Tab3Page),
  },
];
