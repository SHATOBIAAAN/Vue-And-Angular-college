import { Component, effect, Input, OnChanges, OnDestroy, OnInit, signal, SimpleChanges, untracked } from '@angular/core';

@Component({
  selector: 'app-life-methods',
  imports: [],
  templateUrl: './life-methods.component.html',
  styleUrl: './life-methods.component.css'
})
export class LifeMethodsComponent implements OnInit, OnDestroy, OnChanges {
  @Input() title: string

  // сигналы - это специлаьные переменные (реактивные) которые позволяют реализовать 
  // подписку на изменения их значения для осущствления будущего побочного кода
  public message = signal<string>('hello world!')

  public reverseText() :void {
    // this.message = this.message.split('').reverse().join('')
    this.message.update((value) => value.split('').reverse().join(''))
  }
 
  // Выполнение побочного кода после монтирования компонента
  ngOnInit(): void {
    console.log('Component was mounted!')
  } 

  // Выполнение побочного кода после размонтирования компонента
  ngOnDestroy(): void {
    console.log('Component was destroed!')
  }

  // Выполнение побочного кода после изменения пропсов
  ngOnChanges(changes: SimpleChanges): void {
    // Пример условия для 1 указанного пропа
    if (changes['title'].currentValue !== changes['title'].previousValue){
      console.log('Title was updated!')
    }
    console.log('Props was updated!')
  }

  // Выполнение побочного кода до инициализации компонента
  constructor(){
    console.log('Init...')

    // effect используется для того чтобы следить за изменениями сигналов
    // к сожалению, следить можно только за сигналами и выполнять побочный 
    effect(() => {
      console.log('Signal was updated!', this.message())
    })
  }
  
}
