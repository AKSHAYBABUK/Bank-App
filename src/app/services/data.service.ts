import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  userDetails: any = {
    1000: { accno: 1000, username: "anu", password: "123", balance: 0,transaction:[] },
    1001: { accno: 1001, username: "amal", password: "123", balance: 0,transaction:[] },
    1002: { accno: 1002, username: "arun", password: "123", balance: 0,transaction:[] },
    1003: { accno: 1003, username: "megha", password: "123", balance: 0,transaction:[] }

  }

  currentUser= ''
  // to store the value of user name

  currentAcno=''
    // to store the value of acount no




  login(acno: any, psw: any) {

    var userDetails = this.userDetails

    if (acno in userDetails) {
      if (psw == userDetails[acno]["password"]) {
       this.currentUser=userDetails[acno]["username"]
        // store name to display when login success
        this.currentAcno=acno
        // to store account number to use it inside transaction .component.ts file
        // here we dont want to acess it from data base beacuse we enter the acno and also checked it is present in userdetails

        return true

      }
      else {

        return false
      }
    }
    else {

      return false

    }
  }

  register(acno: any, uname: any, psw: any) {

    var userDetails = this.userDetails
    if (acno in userDetails) {

      return false

    }
    else {
      userDetails[acno] = { acno, usename: uname, password: psw, balanace: 0,transaction:[]}
      // to add a new account

      // console.log(userDetails);

      return true
    }

  }



  deposit(acno: any, password: any, amount: any) {
    var userDetails = this.userDetails
    var amnt = parseInt(amount)
    // here value come as string from input to conver it we use parseInt method
    if (acno in userDetails) {
      if (password == userDetails[acno]["password"]) {
        userDetails[acno]["balance"] += amnt
       // to add the input amount to balance  userDetails[acno]["balance"]= userDetails[acno]["balance"]+amnt

       userDetails[acno]['transaction'].push({type:'CREDIT',amount:amnt})
      //  here we want to add the type of transcation and amount to userdetails. 
      // here we are pushing it as object

        return userDetails[acno]["balance"]
        // here we want to return balance value
      }
      else {
        return false
      }
    }
    else {
      return false
    }

  }

  withdraw(acno:any,password:any,amount:any){
    var userDetails=this.userDetails
    var amnt = parseInt(amount)
    if(acno in userDetails){
      if(password==userDetails[acno]["password"]){
        if(amnt<=userDetails[acno]["balance"]){
          userDetails[acno]["balance"] -= amnt

          userDetails[acno]['transaction'].push({type:'DEBIT',amount:amnt})

          return userDetails[acno]["balance"]
        }
        else{
          alert('insufficient balance')
          return false
        }
      }
else{
  alert('incorrect password')
  return false
}
    }
    else{
      alert('incorrect Account Number')
      return false
}
  }


  gettransaction(acno:any){
return this.userDetails[acno]['transaction']
  }



}