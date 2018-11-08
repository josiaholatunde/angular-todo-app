import { Injectable } from '@angular/core';
import { Todo, Status } from '../models/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[];
  constructor() {
    this.todos = [
      new Todo(1,"Sleep", "Urgent",new Date(2018,11,4),new Date(2018,11,4,12,45,23),Status.NotDone),
      new Todo(2,"Code", "Important",new Date(2018,8,4),new Date(2018,8,4,16,48,29),Status.NotDone),
      new Todo(3,"Read", "Not Urgent",new Date(2019,10,4),new Date(2019,10,4,22,45,28),Status.NotDone),
    ]
  }

  addTodo(todo: Todo): Todo {
    if (todo) {
      this.todos.push(todo);
      return todo;
    }
  }
  getTodos(): Todo[] {
      return this.todos;
  }
  deleteTodo(todo: Todo): Todo[] {
    this.todos = this.todos.filter(currentTodo => currentTodo.title !== todo.title )
    return this.todos;
  }
  getTodoArrayLength(): number {
    return this.todos.length;
  }
}
