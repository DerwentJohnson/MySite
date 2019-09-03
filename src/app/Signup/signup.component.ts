import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  myForm: FormGroup;
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      userName: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])(a-zA-Z0-9]+)$'), Validators.minLength(8)]]
    });

    this.myForm.valueChanges.subscribe(console.log);
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


}
