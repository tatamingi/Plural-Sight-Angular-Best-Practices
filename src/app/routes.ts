import { Routes } from '@angular/router';

import { CatalogComponent } from './catalog/catalog.component';

export const appRoutes: Routes = [
  {path: 'catalog', component: CatalogComponent},
  {path: 'users', loadChildren: './users/users.module#UsersModule'}
];
