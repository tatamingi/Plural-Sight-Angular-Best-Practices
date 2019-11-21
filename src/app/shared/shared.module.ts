import { NgModule } from '@angular/core';
import { LoadingSpinnerComponent } from './loading-spinner.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ CommonModule ],
  exports: [ LoadingSpinnerComponent, CommonModule ],
  declarations: [ LoadingSpinnerComponent ],
  providers: []
})
export class SharedModule {
}
