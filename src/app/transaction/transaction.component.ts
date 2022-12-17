import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {

accountno:any
transaction:any
// we can either define this as string or any
  constructor(private ds:DataService){

  this.accountno=this.ds.currentAcno
// to acess account no from data.services

   this.transaction=this.ds.gettransaction(this.accountno)
  //  method is called inside constructor so that it execute when the page loads

   console.log(this.transaction);
   
  }
}

