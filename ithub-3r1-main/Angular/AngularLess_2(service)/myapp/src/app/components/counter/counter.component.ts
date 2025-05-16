import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  // Output - декоратор для получение метода с родительского комопнента
  @Input() count: number
  @Output() incrementByPrompt = new EventEmitter()
  @Output() increment = new EventEmitter()
  @Output() decrement = new EventEmitter()
  @Output() incrementByNumber = new EventEmitter<number>()

  incrementByNumberHanlde(num:number){
    this.incrementByNumber.emit(num)
  }

  incrementByPromptHandle(){
    this.incrementByPrompt.emit()
  }

  incrementHandle(){
    this.increment.emit()
  }

  decrementHandle(){
    this.decrement.emit()
  }
}
