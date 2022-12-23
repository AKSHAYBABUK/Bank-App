import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-deleteconfirm',
  templateUrl: './deleteconfirm.component.html',
  styleUrls: ['./deleteconfirm.component.css']
})
export class DeleteconfirmComponent {

  //  creating new event using eventEmitter

  // @output is used to transfer from child to parent through app-deleteconfirm

  @Output() onCancel = new EventEmitter()


  // parent to child relation (transfer item from parent to child through selector app-deleteconfirm)
  @Input() item:string|undefined

  cancel(){

    // here we call the event(object) with a emit method which is defined inside the class eventemitter
    this.onCancel.emit()

  }

}
