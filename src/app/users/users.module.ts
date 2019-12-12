import { NgModule } from '@angular/core';

import { SignInComponent } from './sign-in.component';
import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { UserRepositoryService } from '../core/user-repository.service';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      {path: 'register', component: RegisterComponent},
      {path: 'sign-in', component: SignInComponent}
    ])
  ],
  exports: [ ],
  declarations: [
    SignInComponent,
    RegisterComponent
  ],
  providers: [ UserRepositoryService ]
})
export class UsersModule {
}
