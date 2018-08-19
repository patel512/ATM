import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardService } from '../card.service';
@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  isValidFormSubmitted = null;
  balanceForm = this.formBuilder.group({
    amount: ['', [Validators.required]]
  });
  message: any;
  constructor(private formBuilder: FormBuilder,
    private cardService: CardService,
    private router: Router ) { }
  ngOnInit() {
  }
  get cardNumber() {
    return this.balanceForm.get('amount');
  }
  onFormSubmit(amount) {
    this.isValidFormSubmitted = false;
    if (this.balanceForm.invalid) {
      return;
    }
    this.isValidFormSubmitted = true;
    this.balanceForm.reset();
    const cNo = localStorage.getItem('card number');
    this.cardService.rechargeCard({card_number: cNo, amount: amount}).subscribe((data: any) => {
      if (data.success = 'true') {
        this.message = data.message;
        this.router.navigate(['/transaction/withdraw']);
      } else {
        this.message = 'Something went wrong';
      }
     });
  }
}
