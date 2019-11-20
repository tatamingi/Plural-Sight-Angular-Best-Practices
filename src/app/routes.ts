import { Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';

import { SignInComponent } from './users/sign-in.component';
import { RegisterComponent } from './users/register.component';

export const appRoutes: Routes = [
  {path: 'catalog', component: CatalogComponent,},
  {path: 'users/register', component: RegisterComponent},
  {path: 'users/sign-in', component: SignInComponent,},
];
