import { Component } from '@angular/core';
import {Task} from "../../Task";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks:Task[] = [];

  //services are always as an argumen of the constructor
  constructor(private taskService:TaskService) {}
  ngOnInit() {
    //you need to subscribe to an observable in order to see its data
    this.taskService.
      getTasks(). //reminder: it returns an observable
      subscribe((tasks) => (
        this.tasks = tasks
    ));

  }
  deleteTask(task:Task){
    this.taskService
      .deleteTask(task)//deleting the task won't show in the front-end(you need to refresh for the backend content to update)
      //solution? => filter it out in the front end
      .subscribe(() => (
        this.tasks = this.tasks.filter((t) => t.id !== task.id)

      ));


  }

  switchReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService
      .addTask(task)
      .subscribe((task) => (
        this.tasks.push(task)
      ));

  }
}
