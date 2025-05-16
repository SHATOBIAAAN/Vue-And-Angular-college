import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  // Для получение пропа используется декоратор Input
  @Input() name: string
  @Input() email: string
}
