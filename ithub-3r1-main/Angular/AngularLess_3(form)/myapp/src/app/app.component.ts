import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormExampleComponent } from "./components/form-example/form-example.component";
import { LifeMethodsComponent } from "./components/life-methods/life-methods.component";
import { UserListComponent } from "./components/user-list/user-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormExampleComponent, LifeMethodsComponent, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';

  public reverseText() :void {
    this.title = this.title.split('').reverse().join('')
  }
}
