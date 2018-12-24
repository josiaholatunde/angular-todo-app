import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/service/todo.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  priority: string[] = ['Urgent', 'Important', 'Normal', 'Not Urgent'];
  defaultPriority = null;
  hasMessage = false;
  message = '';
  isUpdate: boolean;
  todo: any = {
    status: false
  };

  constructor(private todoService: TodoService, private router: Router, private route: ActivatedRoute) {
    this.hasMessage = false;
    this.message = '';
    this.isUpdate = false;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isUpdate = true;
        this.todoService.getTodo(+params['id']).subscribe(todo => {
          this.todo = todo;
          this.todo.deadlineDate = new Date(Date.parse(todo.deadlineDate)).toISOString().slice(0, 10);
          this.todo.deadlineTime = new Date().toISOString().slice(11, 16);

        });
      }
    });
  }

  submitForm() {
  console.log('ooo', this.todo);

      const {id, priority, deadlineDate, deadlineTime, title, status} = this.todo;
      if (priority && deadlineDate && deadlineTime && title.trim().length > 0) {
        const length = this.todoService.getTodoArrayLength();
        if (id) {
          this.todoService.updateTodo(this.todo).subscribe(todo => {
            if (todo) {
              this.message = 'Todo successfully updated';
             // form.reset();
              setTimeout(() => {
                this.message = '';
                this.router.navigate(['todos']);
              }, 1200);
            }
          }, error => {
            console.log('error occurred');
          });
        } else {
          this.todoService.addTodo(this.todo).subscribe(todo => {
            if (todo) {
              this.message = 'Todo successfully added';
             // form.reset();
              setTimeout(() => {
                this.message = '';
                this.router.navigate(['todos']);
              }, 1200);
            }
          }, error => {
            console.log('error occurred');
          });
        }
      } else {
        this.hasMessage = true;
        setTimeout(() => this.hasMessage = false, 1200);
      }
    }
}
