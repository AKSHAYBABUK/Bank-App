import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  constructor(private ds: DataService,private router:Router,private fb:FormBuilder) { }

  // uname = ''
  // acno = ''
  // psw = ''


  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw:['',[Validators.required,Validators.pattern('[0-9]+')]]})

  register() {
    // var uname = this.uname
    // var acno = this.acno
    // var psw = this.psw

    var uname = this.registerForm.value.uname
    var acno = this.registerForm.value.acno
    var psw = this.registerForm.value.psw

    if(this.registerForm.valid){
      // to check it is valid or not if true then this will execute.

      const result = this.ds.register(acno, uname, psw)

    if (result) {
      alert('registration success')
      this.router.navigateByUrl('')
    }
    else {
      alert('user already exist')
    }

  }
  else{
    alert('form not valid')
  }

    }


    

}

