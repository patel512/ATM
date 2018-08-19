import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from './card/card';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CardService {
  rootUrl = environment['cardUrl'];
  constructor( private http: HttpClient ) { }
  getCard(params: any = {}) {
    return this.http.post(this.rootUrl + 'getcard', params);
  }
  rechargeCard(params: any = {}) {
    return this.http.post(this.rootUrl + 'rechargeCard', params);
  }
  getBalance(params: any = {}) {
    return this.http.post(this.rootUrl + 'balance', params);
  }
}
