import { Component } from '@angular/core';
import { Task } from '../interface/task';
@Component({
  selector: 'app-to-do-app',
  templateUrl: './to-do-app.component.html',
  styleUrls: ['./to-do-app.component.css']
})
export class ToDoAppComponent {
data:Task[]=
[
  {"body":"os","complite":true},
  {"body":"math","complite":false},
  {"body":"en","complite":false},
  {"body":"arb","complite":false},
  {"body":"fran","complite":false}
  ]
; 
resivedata(data_item:Task)
{
  console.log( this.data.filter(item => item!=data_item));
  this.data= this.data.filter(item => item!=data_item)
}
changeStyle(data_item:Task){
   this.data.map(item => item.body==data_item.body?data_item:item)
   console.log( this.data)
  // console.log( this.data.map(item => item.body==data_item.body?data_item:item))

}
newobject(body_item:string){
  let body :Task={
    body:body_item,
    "complite":false
  } 
  this.data.push(body)
  // console.log(this.data)
}
}
