import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'myapp';

  constructor(){
    if (typeof window !== 'undefined'){
      localStorage.setItem('key_1', 'constructor')  
    }
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined'){
      localStorage.setItem('key_2', 'ngOnInit')  
    }
  }

}
