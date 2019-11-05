import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() task: Todo;
  @Output() eventAction = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  doAction(myAction: string) {
    // le clic sur le bouton émet un appel
    this.eventAction.emit(myAction);
  }

  changeState() {
    this.task.done = !this.task.done;
  }

}
