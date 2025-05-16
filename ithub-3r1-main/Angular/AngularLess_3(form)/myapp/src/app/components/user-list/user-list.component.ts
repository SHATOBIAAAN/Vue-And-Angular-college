import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

interface UserResponse {
  id: number,
  name: string
}

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})

export class UserListComponent implements OnInit{
  public users: UserResponse[] = []

  constructor(private http: HttpClient){}
  
  getUsers(): Observable<UserResponse[]>{
    return this.http.get<UserResponse[]>('https://jsonplaceholder.typicode.com/users')
  }

  ngOnInit(): void {
    this.getUsers().subscribe((data) => {
       this.users = data.map((user:UserResponse) => ({id: user.id, name: user.name}))
    })
  }
  
  // ngOnInit(): void {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(res => res.json())
  //     .then(data => {
  //       this.users = data.map((user:UserResponse) => ({id: user.id, name: user.name}))
  //     })
  // }

}
