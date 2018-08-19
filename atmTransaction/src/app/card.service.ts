import { Injectable } from '@angular/core';
import { Card } from './card/card';
@Injectable({
  providedIn: 'root'
})
export class CardService {
  createUser(user: Card) {
    console.log('User Name: ' + user.username);
    console.log('Password: ' + user.password);
    console.log('Mobile Number: ' + user.mobileNumber);
    console.log('Email: ' + user.email);
  }
}
