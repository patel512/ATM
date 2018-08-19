import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Card } from './card';
import { CardService } from '../card.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  isValidFormSubmitted = null;
  cardForm = this.formBuilder.group({
    cardNumber: ['', [Validators.required]],
    cardPin: ['', [Validators.required]]
  });
  message: any;
  errorMessage = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private cardService: CardService) {
  }
  ngOnInit() {
  }
  get cardNumber() {
     return this.cardForm.get('cardNumber');
  }
  get cardPin() {
     return this.cardForm.get('cardPin');
  }
  onFormSubmit(paramCardNumber, paramPin) {
     this.isValidFormSubmitted = false;
     if (this.cardForm.invalid) {
        return;
     }
     this.isValidFormSubmitted = true;
     this.cardForm.reset();
     this.cardService.getCard({card_number: paramCardNumber, pin: paramPin}).subscribe((data: any) => {
      if (data.success = 'true') {
        localStorage.setItem('card number', paramCardNumber);
        this.message = data.message;
        this.router.navigate(['/transaction']);
      } else {
        return;
      }
     });
  }
}
