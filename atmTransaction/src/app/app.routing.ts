import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
const routes: Routes = [{
  path: '',
  children: [{
    path: '',
    loadChildren: './card/card.module#CardModule'
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
