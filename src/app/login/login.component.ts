import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  aim="Your Perfect Banking Partner"
  data="enter accno"
  // acno=''
  // psw=''

  // userDetails:any={
  //  1000:{accno:1000,username:"anu",password:"123",balance:0},
  //  1001:{accno:1001,username:"amal",password:"123",balance:0},
  //  1002:{accno:1002,username:"arun",password:"123",balance:0},
  //  1003:{accno:1003,username:"megha",password:"123",balance:0}

  // }

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder){}

loginForm=this.fb.group({acno:['',[Validators.required,Validators.pattern('[0-9]+')]],psw:['',[Validators.required,Validators.pattern('[0-9]+')]]})

  login(){
      var acno=this.loginForm.value.acno
      var psw=this.loginForm.value.psw
     const result=this.ds.login(acno,psw)

     if(result){
     alert('login sucess')
     this.router.navigateByUrl('dashboard')
     }
     else{
      alert('incorrect username or password')
     }
  

  }

}
    

  // using  event binding using template rendering varible method:

  // login(a: any, b: any) {

  //   this.acno = a.value
  //   this.psw = b.value
  //   var acno = this.acno
  //   var psw = this.psw
  //   var userDetails = this.userDetails

  //   if (acno in userDetails) {
  //     if (psw == userDetails[acno]["password"]) {
  //       alert('login success')
  //     }
  //     else {
  //       alert('Incorrect Password')
  //     }
  //   }
  //   else {
  //     alert('Incorrect Username')
  //   }
  // }


// using dollar event binding method

//   login(){
// var acno=this.acno
// var psw=this.psw
// var userDetails=this.userDetails

// if(acno in userDetails){
//   if(psw==userDetails[acno]["password"]){
//     alert('login success')
//   }
//   else {
//     alert('Incorrect Password')
//   }
// }
// else {
//   alert('Incorrect Username')
// }
//     // alert("login clicked")
//   }
//   acnoChange(event:any){
//     this.acno=event.target.value
//     console.log(this.acno);
    
//   }
//   pswChange(event:any){
//       this.psw=event.target.value
//       console.log(this.psw);
      
//   }

// using ngmodal method

// login(){
//   var acno=this.acno
//   var psw=this.psw
//   var userDetails=this.userDetails
  
//   if(acno in userDetails){
//     if(psw==userDetails[acno]["password"]){
//       alert('login success')
//     this.router.navigateByUrl('dashboard')

//     }
//     else {
//       alert('Incorrect Password')
//     }
//   }
//   else {
//     alert('Incorrect Username')
//   }
//       // alert("login clicked")
//     }


//     acnoChange(event:any){
//       this.acno=event.target.value
//       console.log(this.acno);
      
//     }
//     pswChange(event:any){
//         this.psw=event.target.value
//         console.log(this.psw);
        
//     }


    


