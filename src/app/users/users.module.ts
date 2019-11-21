import { NgModule } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

import { SignInComponent } from './sign-in.component';
import { RegisterComponent } from './register.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    RegisterComponent,
    SignInComponent
  ],
  declarations: [
    RegisterComponent,
    SignInComponent
  ],
  providers: []
})
export class UsersModule {
}
