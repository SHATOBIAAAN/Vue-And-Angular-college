import { TodoItem } from '../../../shared/types/todo';
import { TodoService } from './../../../services/todo.service';
import { Component } from '@angular/core';
import { TodoItemComponent } from "../todo-item/todo-item.component";

@Component({
  selector: 'app-todo-list',
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  public todos: TodoItem[];

  // Импорт сервиса происходит через конструктор (первый способ, а второй в add-form))
  constructor(public todoService: TodoService){
    this.todos = todoService.todos
  }
}
