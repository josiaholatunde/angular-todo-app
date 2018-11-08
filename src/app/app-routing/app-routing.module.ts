import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { TodoListComponent } from '../component/todo-list/todo-list.component';
import { TodoFormComponent } from '../component/todo-form/todo-form.component';
import { NotFoundComponent } from '../component/not-found/not-found.component';
import { EditTodoFormComponent } from '../component/edit-todo-form/edit-todo-form.component';

const routes = [
  {path: 'todos',component: TodoListComponent},
  {path: 'todos/addTodo',component: TodoFormComponent},
  {path: 'todos/editTodo/:id',component: EditTodoFormComponent},
  {path: '', pathMatch: 'full',redirectTo: 'todos'},
  {path: '**', component: NotFoundComponent }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
