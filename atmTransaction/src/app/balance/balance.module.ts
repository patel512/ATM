import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BalanceComponent } from './balance.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{
  path: '',
  component: BalanceComponent
}];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [BalanceComponent]
})
export class BalanceModule { }
