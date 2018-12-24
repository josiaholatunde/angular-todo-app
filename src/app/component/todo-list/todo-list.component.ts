import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Todo, Priority } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: any[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
      this.todos.forEach(todo => {
        todo.priority = Priority[todo.priority];
      });
    });
  }
  changeStatus(todo: Todo) {
    todo.status = true;
    this.todoService.changeTodoStatus(todo).subscribe(t => console.log('Successful', err => console.log('failed')));
  }
  deleteTodo(todo: Todo) {
    if (confirm('Are you sure you want to delete this todo ?')) {
      this.todoService.deleteTodo(todo.id).subscribe(id => console.log('deleted'));
    }
  }

}
