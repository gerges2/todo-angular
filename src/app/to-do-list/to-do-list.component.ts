import { Component ,EventEmitter,Input, Output  } from '@angular/core';
import { Task } from '../interface/task';
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
@Input() data!:Task[]
@Output() senddatatoperand = new EventEmitter();
@Output() senddatatoperand2 = new EventEmitter();
senddata(row:Task){
  this.senddatatoperand.emit(row)
}
changestyle(item:Task){
  item.complite=true
  this.senddatatoperand2.emit(item)

}

}
