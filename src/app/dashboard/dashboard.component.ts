import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  // acno = ''
  // psw = ''
  // amnt = ''

  // acno1 = ''
  // psw1 = ''
  // amnt1 = ''

dateandtime:any
  user = ''
accountno:any


  // here we call the dataservice class here a class in other class so we use constructor
  constructor(private ds: DataService, private fb: FormBuilder, private router: Router) {

    // acess user name from dataservices.ts
    this.user = this.ds.currentUser

    this.dateandtime=new Date()

    // creating a object with classs Date and add it into dateandtime 
  }

  ngOnInit(): void {
    if (!localStorage.getItem('currentAcno')) {
        alert('please login')
        this.router.navigateByUrl('')

    }
  }

  depositeForm = this.fb.group({ acno: [''], psw: [''], amnt: [''] })
  withdrawForm = this.fb.group({ acno1: [''], psw1: [''], amnt1: [''] })

  deposit() {

    var acno = this.depositeForm.value.acno
    var psw = this.depositeForm.value.psw
    var amnt = this.depositeForm.value.amnt
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
    var acno1 = this.withdrawForm.value.acno1
    var psw1 = this.withdrawForm.value.psw1
    var amnt1 = this.withdrawForm.value.amnt1
    const result = this.ds.withdraw(acno1, psw1, amnt1)
    if (result) {
      alert(`${amnt1} is debited from your account and the balance is ${result}`)
    }

  }


  logout() {
    localStorage.removeItem('currentUser')
    localStorage.removeItem('currentAcno')
    this.router.navigateByUrl('')
  }


  deleteconfirm(){
    // here we want to get the account number to the delete confirm component when button is pressed when it reached thr it will 
    // execute the style and removes deposite and withdraw
    this.accountno=JSON.parse(localStorage.getItem("currentAcno")|| '')

  }

  oncancel(){
    // here we want to remove account number from the deleteconfrim component so that deposite and withdraw will be visible 
    this.accountno=''
  }

}




