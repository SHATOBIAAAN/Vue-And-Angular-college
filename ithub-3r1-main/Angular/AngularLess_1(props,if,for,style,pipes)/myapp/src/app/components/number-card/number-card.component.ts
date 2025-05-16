import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number-card',
  imports: [],
  templateUrl: './number-card.component.html',
  styleUrl: './number-card.component.css'
})
export class NumberCardComponent {
  @Input() number: number
}
