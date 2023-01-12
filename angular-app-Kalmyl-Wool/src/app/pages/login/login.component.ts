import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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
  openAdmin?:boolean;


  ngOnInit(): void {
    this._login = 'admin';
    this._password = '123';
    this.openAdmin = false;

  }

  @ViewChild('testForm') someFrom: NgForm | null = null;

  


  onSubmit() {
    console.log(this.someFrom?.value); //получила значение из инпута
    //console.log(this.someNewNameFrom?.value.userLogin) // чтобы считать только значение которое заносится в userLogin
    if(this.someFrom?.value.userLogin === this._login && this.someFrom?.value.userPassword === this._password){
      this.openAdmin = true;
    }
  }

}


