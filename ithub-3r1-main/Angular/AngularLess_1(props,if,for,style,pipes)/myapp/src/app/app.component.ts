import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from './components/user-card/user-card.component';
import { NumberCardComponent } from './components/number-card/number-card.component';
import { NgStyle } from '@angular/common';
import { PipeExampleComponent } from './components/pipe-example/pipe-example.component';

type UserType = {
  id: number,
  name: string,
  email: string,
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserCardComponent, NumberCardComponent, PipeExampleComponent,NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

// Создайте новый компонент number-card с возможностью передачи пропа number 
// данный компнент должен хранить ситилацию на ваше усмотрение (контейнер с числом, бордером и тд) 
// проп с числом необходимо передать из компонента App

// В каетве ответа прислать код разметки компонента number-card

export class AppComponent {
  themeClass:string = 'dark'
  title :string = 'myapp';
  number :number = 10

  users: UserType[] = [
    {id: 1, name: 'Alex', email: 'alex@ithub.ru'},
    {id: 2, name: 'Willyam', email: 'willyam.tit@ithub.ru'},
    {id: 3, name: 'Steven', email: 'steven.man@ithub.ru'},
    {id: 4, name: 'Marry', email: 'marry_example@ithub.ru'},
  ]

}

