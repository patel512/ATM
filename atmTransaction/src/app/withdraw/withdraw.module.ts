import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithdrawComponent } from './withdraw.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{
  path: '',
  component: WithdrawComponent
}];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WithdrawComponent]
})
export class WithdrawModule { }
