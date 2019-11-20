import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { appRoutes } from './routes'
import { AppComponent }  from './app.component';
import { NavBarComponent }  from './nav-bar.component';
import { CatalogComponent } from "./catalog/catalog.component";
import { SignInComponent } from "./users/sign-in.component";
import { LoadingSpinnerComponent } from "./components/loading-spinner.component";
import { UserRepositoryService } from "./services/user-repository.service"
import { AccountMenuComponent } from "./account-menu.component";
import { RegisterComponent } from './users/register.component';
import { CatalogRepositoryService } from './catalog/catalog-repository.service';

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    CatalogComponent,
    RegisterComponent,
    SignInComponent,
    LoadingSpinnerComponent,
    AccountMenuComponent
  ],
  providers: [ UserRepositoryService, CatalogRepositoryService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
