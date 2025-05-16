import { Injectable } from '@angular/core';
import { TodoItem } from '../shared/types/todo';

const startTodos: TodoItem[] = [
  {id: 1, title: 'Помыть руки', completed: true},
  {id: 2, title: 'Сделать зарядку', completed: false},
  {id: 3, title: 'Наконец изучить React', completed: true}
]

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  public todos: TodoItem[] = startTodos

  public deleteTodo(id: number) :void{
    const index = this.todos.findIndex(todo => todo.id === id)
    this.todos.splice(index, 1)
  }

  public changeTodo(id: number) :void{
    const todo = this.todos.find(todo => todo.id === id)
    if (todo){
      todo.completed = !todo.completed
    }
  }

  public addTodo(title: string):void{
    this.todos.push({
      id: Date.now(),
      completed: false,
      title
    })
  }

}
