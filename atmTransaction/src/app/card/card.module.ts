import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card.component';
import { CardService } from '../card.service';
const routes: Routes = [{
  path: '',
  component: CardComponent
}];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [CardComponent],
  providers: [CardService]
})
export class CardModule { }
