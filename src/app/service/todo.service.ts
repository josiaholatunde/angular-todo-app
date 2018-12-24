import { Injectable } from '@angular/core';
import { Todo, Priority } from '../models/todo';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[];
  private url = 'http://localhost:5000/api/todos';
  constructor(private http: HttpClient) {
    this.todos = [];
  }

  addTodo(todo: Todo): Observable<Todo> {
    if (todo) {
      return this.http.post<Todo>(`${this.url}`, todo, httpOptions).pipe(tap(_ => console.log(`Added Todo with id ${todo.id}`)));
    }
  }
  getTodo(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.url}/${id}`).pipe();
  }
  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.url}/${todo.id}`, todo, httpOptions).pipe(tap(_ => console.log(`Updated Todo with id ${todo.id}`)));
  }
  getTodos(): Observable<Todo[]> {
      return this.http.get<Todo[]>(this.url).pipe();
  }
  deleteTodo(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`).pipe(tap(_ => console.log(`Deleted Todo with id ${id}`)));
  }
  getTodoArrayLength(): number {
    return this.todos.length;
  }
  changeTodoStatus(todo: Todo): Observable<any> {
    return this.http.get<Todo[]>(`${this.url}/ChangeStatus/${todo.id}/${todo.status}`).pipe();
  }
}
