import { Component, inject } from '@angular/core';
import { TodoService } from '../../../services/todo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  imports: [FormsModule],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css'
})
export class AddFormComponent {
  // Второй способ получение данных с сервсиа
  public todoService = inject(TodoService)
  public title: string;
  
  public addHandle(event: KeyboardEvent){
    if (event.key === 'Enter'){
      this.todoService.addTodo(this.title)
    }
  }

}
