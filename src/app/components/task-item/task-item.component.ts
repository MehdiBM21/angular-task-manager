import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Task} from "../../Task";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  delete( task: Task){
    this.onDeleteTask.emit(task);
  }

  toggleReminder(){
    this.onToggleReminder.emit(this.task);
  }

}
