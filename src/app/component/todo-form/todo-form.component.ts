import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo, Status } from 'src/app/models/todo';
import { TodoService } from 'src/app/service/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  priority: string[] = ['Urgent','Important','Normal','Not Urgent'];
  defaultPriority = null;
  hasMessage: boolean = false;
  message: string;

  constructor(private todoService: TodoService, private router: Router) {
    this.hasMessage = false;
  }

  ngOnInit() {
  }

  saveTodo(form: NgForm) {
    if (form.value.priority !== this.defaultPriority && form.value.date !== undefined && form.value.time !== undefined)
    {
      console.log(form);
      let length = this.todoService.getTodoArrayLength();
      console.log("Length",length);

      let date = form.value.date;
      let time = form.value.time;
      let todo = new Todo(length+1,form.value.title, form.value.priority,date,time,Status.NotDone);
      todo = this.todoService.addTodo(todo);
      console.log(todo.id);

      if (todo) {
        this.message = "Todo successfully added";
        form.reset();
        setTimeout(() => {
          this.message = '';
          this.router.navigate(['todos']);
        }, 1200);


      }
    } else {
      this.hasMessage = true
      setTimeout(() => this.hasMessage = false, 1200);
    }

  }

}
