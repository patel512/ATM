import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  balance: any;
  message: any;
  constructor(
    private cardService: CardService
  ) { }
  ngOnInit() {
    this.balnceInfo();
  }
  balnceInfo() {
    const cNo = localStorage.getItem('card number');
    this.cardService.getBalance({card_number: cNo}).subscribe((data: any) => {
      if (data.success = 'true') {
        this.balance = data.balance;
      } else {
        this.message = 'Something went wrong';
      }
     });
  }
}
