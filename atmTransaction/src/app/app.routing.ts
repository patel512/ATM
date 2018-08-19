import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
const routes: Routes = [{
  path: '',
  children: [{
    path: '',
    loadChildren: './card/card.module#CardModule'
  }]
},
{
  path: 'transaction',
  children: [{
    path: '',
    loadChildren: './balance/balance.module#BalanceModule'
  },
  {
    path: 'withdraw',
    loadChildren: './withdraw/withdraw.module#WithdrawModule'
  }]
}];
@NgModule({
  declarations: [ ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting { }
