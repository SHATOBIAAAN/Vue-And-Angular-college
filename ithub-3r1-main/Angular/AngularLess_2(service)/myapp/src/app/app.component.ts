import { Component } from '@angular/core';
import { CounterComponent } from "./components/counter/counter.component";
import { AddFormComponent } from "./components/todos/add-form/add-form.component";
import { TodoListComponent } from "./components/todos/todo-list/todo-list.component";

// Сервисы - новая сущность в ангуляре которая позволяет изолировать логику отдельно от компонента 
// удаленно напоминает редьюсеры в редакс, а также хранилища в pinia (vue)


@Component({
  selector: 'app-root',
  imports: [CounterComponent, AddFormComponent, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public count: number = 0  

  increment():void{
    this.count++
  }

  decrement():void{
    this.count--
  }

  incrementByPrompt():void{
    let value = prompt('Введите число')
    if (value && !isNaN(+value)){
      this.count += +value
    }
  }

  incrementByNumber(number:number) :void{
    if (!isNaN(number)){
      this.count += +number
    }
  }


}

