import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Card } from './card';
import { CardService } from '../card.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  unamePattern = '^[a-z0-9_-]{8,15}$';
  pwdPattern = '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$';
  mobnumPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  isValidFormSubmitted = null;
  userForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.pattern(this.unamePattern)]],
    password: ['', [Validators.required, Validators.pattern(this.pwdPattern)]],
    mobileNumber: ['', Validators.pattern(this.mobnumPattern)],
    email: ['', Validators.pattern(this.emailPattern)],
  });

  constructor(private formBuilder: FormBuilder, private userService: CardService) {
  }
  ngOnInit() {
  }
  onFormSubmit() {
     this.isValidFormSubmitted = false;
     if (this.userForm.invalid) {
        return;
     }
     this.isValidFormSubmitted = true;
     const user: Card = this.userForm.value;
     this.userService.createUser(user);
     this.userForm.reset();
  }
  get username() {
     return this.userForm.get('username');
  }
  get password() {
     return this.userForm.get('password');
  }
  get mobileNumber() {
     return this.userForm.get('mobileNumber');
  }
    get email() {
     return this.userForm.get('email');
  }
}
