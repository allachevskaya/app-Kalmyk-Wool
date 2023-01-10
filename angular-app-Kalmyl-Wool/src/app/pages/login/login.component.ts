import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  _login?:string;
  _password?:string;
  userPassword?: any;
  userLogin?: any;

  ngOnInit(): void {
    this._login = 'admin'
    this._password = '123'
  }
  @ViewChild('testForm') someNewNameFrom: NgForm | null = null;
  

  onSubmit() {
    console.log(this.someNewNameFrom?.value); //получила значение из инпута
  }

}
