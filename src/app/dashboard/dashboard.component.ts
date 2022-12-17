import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  acno = ''
  psw = ''
  amnt = ''

  acno1 = ''
  psw1 = ''
  amnt1 = ''


  user=''



  // here we call the dataservice class here a class in other class so we use constructor
  constructor(private ds: DataService) {

    // acess user name from dataservices.ts
    this.user=this.ds.currentUser
  }


  deposit() {

    var acno = this.acno
    var psw = this.psw
    var amnt = this.amnt
    const result = this.ds.deposit(acno, psw, amnt)
    // here value of acno and psw and amnt are the value user add in input so we take here that value
    if (result) {
      // inside IF if we mention anythin other than flase it is considered as true
      // here we are return balance but it is also case of true
      alert(`${amnt} credited to your account and the balance is ${result}`)
    }
    else {
      alert('incorrect Account Number or Password')
    }

  }

  withdraw() {
    var acno1 = this.acno1
    var psw1 = this.psw1
    var amnt1 = this.amnt1
    const result = this.ds.withdraw(acno1, psw1, amnt1)
    if (result) {
      alert(`${amnt1} is debited from your account and the balance is ${result}`)
    }

  }

}

