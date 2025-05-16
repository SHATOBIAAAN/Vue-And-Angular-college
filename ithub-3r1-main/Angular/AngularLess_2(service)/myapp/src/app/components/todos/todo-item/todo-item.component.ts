import { Component, Input } from '@angular/core';
import { TodoService } from '../../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() title: string
  @Input() id: number
  @Input() completed: boolean

  constructor(public todoService: TodoService){

  }

  deleteTodo():void{
    this.todoService.deleteTodo(this.id)
  }

  changeTodo():void{
    this.todoService.changeTodo(this.id)
  }

}
