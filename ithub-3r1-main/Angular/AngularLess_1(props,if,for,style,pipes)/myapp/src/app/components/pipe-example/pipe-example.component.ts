import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ReversePipe } from '../../pipes/reverse.pipe';
import { InitCapPipe } from '../../pipes/init-cap.pipe';

// pipe - это готовые функции, которые позволяет быстро преообразовать данные на разметке
@Component({
  selector: 'app-pipe-example',
  imports: [LowerCasePipe, UpperCasePipe, DatePipe, CurrencyPipe, PercentPipe, DecimalPipe, JsonPipe, ReversePipe, InitCapPipe],
  templateUrl: './pipe-example.component.html',
  styleUrl: './pipe-example.component.css'
})
export class PipeExampleComponent {
  title: string  = 'HELLO world!'
  price: number = 0.56
  currentDate: Date = new Date()
}
