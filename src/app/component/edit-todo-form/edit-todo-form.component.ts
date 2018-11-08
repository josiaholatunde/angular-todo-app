import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-edit-todo-form',
  templateUrl: './edit-todo-form.component.html',
  styleUrls: ['./edit-todo-form.component.css']
})
export class EditTodoFormComponent implements OnInit {

  todo: Todo;
  priority: string[] = ['Urgent','Important','Normal','Not Urgent'];
  constructor(private todoService: TodoService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params["id"] !== null){
        this.todo = this.todoService.getTodos().find(todo => todo.id === +params["id"]);
        //this.todo.deadlineDate = this.todo.deadlineDate.toISOString().substring(0,10);
        //this.todo.deadlineTime = this.todo.deadlineTime.toISOString();
        console.log('Time',this.todo.deadlineTime);


      }
    })
  }

}
