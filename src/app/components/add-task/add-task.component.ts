import {Component, EventEmitter, Output} from '@angular/core';
import {Task} from "../../Task";
import {UiService} from "../../services/ui.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  text !:string;
  day !:string;
  reminder: boolean = false;
  subscription: Subscription;
  showAddTask: boolean = false;
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  constructor(private uiService:UiService) {
    //subscribe to UI to hav the info about the show/hide form
    this.subscription = this.uiService.onToggle().subscribe(
      value=> this.showAddTask = value
    );
  }
  onSubmit(){
    if(!this.text){
      alert("Please add a task");
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    this.onAddTask.emit(newTask);
  }

}
