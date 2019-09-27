import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { AccountsService } from '../accounts.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  myForm = new FormGroup({
    userName: new FormControl(null , {validators: [ Validators.required, Validators.minLength(5) ]}),
    email: new FormControl(null , {validators: [Validators.required, Validators.email]}),
    password: new FormControl(null, {validators: [Validators.required, Validators.minLength(8)]}),
    password2: new FormControl(null, { validators: [Validators.required, Validators.minLength(8)] })
  });
  constructor( private registration: AccountsService) { }

  ngOnInit() {
    // this.myForm = this.formBuilder.group({
    //   email: ['', [Validators.required, Validators.email]],
    //   userName: ['', [Validators.required, Validators.minLength(5)]],
    //   password: ['', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])(a-zA-Z0-9]+)$'), Validators.minLength(8)]]
    // });


  }

  get email() {
    return this.myForm.get('email');
  }

  get userName() {
    return this.myForm.get('userName');
  }

  get password() {
    return this.myForm.get('password');
  }

  onSubmit() {
    console.log(JSON.stringify(this.myForm.value));
    this.registration.register(this.myForm.value)
    .subscribe( response => console.log('Success', response),
    error => console.error('Error', error)
    );
  }

  passwordValidator() {
    if ( this.myForm.get('password').value === this.myForm.get('password2').value) {
      console.log('OK');
    }

  }
}
