import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsLayoutComponent } from './tabs-layout/tabs-layout.component';

// Need to import then tabs component, then add that component to the routes

const routes: Routes = [
  {
    path: '',
    component: TabsLayoutComponent,
    children: [      
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
        path: 'favorites',
        loadChildren: () => import('./favorites/favorites.module').then( m => m.FavoritesPageModule)
      }
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
