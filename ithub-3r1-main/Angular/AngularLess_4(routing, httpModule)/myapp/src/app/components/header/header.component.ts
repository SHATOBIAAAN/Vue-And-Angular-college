import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem {
  id: number
  path: string
  title: string
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public menuList: MenuItem[] = [
    {id: 1, title: 'Home', path: '/home'},
    {id: 2, title: 'About', path: '/about'},
    {id: 3, title: 'Contacts', path: '/contacts'},
  ]
}
