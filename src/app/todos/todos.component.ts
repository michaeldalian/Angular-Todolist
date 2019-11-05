import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  /* ici on crée un objet de type tableau, il est public car on souhaite l'appeler dans la vue,
  il attend des objets de type Todo définis dans la classe et il est initialisé à vide*/

  public arrTodolist: Array<Todo> = []; // c'est un tableau de l'objet Todo (class Todo)
  public newTodo = new Todo();

  constructor() { }

  ngOnInit() {
  }

  addTask() {
    this.arrTodolist.push(this.newTodo);
    this.newTodo = new Todo();
    console.table(this.arrTodolist);
  }

  modification(action: string, element: Todo) {
      if (action === 'delete') {
        this.arrTodolist.splice(this.arrTodolist.indexOf(element), 1);
      }
      console.log(element);
  }


}
