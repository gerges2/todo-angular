import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})
export class ToDoFormComponent {
  @Output() newtask=new EventEmitter();
  inputdata:string=''
  submit(){
    console.log(this.inputdata)
    this.newtask.emit(this.inputdata)
    this.inputdata=''
  }

}

