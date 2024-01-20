import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {

  todoList: Task[]=[]

  ngOnInit(): void {
    this.todoList=localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')!): []
  }
  onSubmit(formValue: Task){
    this.todoList.push(formValue)
    localStorage.setItem('task',JSON.stringify(this.todoList))
    console.log(formValue)
}

onRemove (index:number){
  this.todoList.splice (index,1)
}
}
