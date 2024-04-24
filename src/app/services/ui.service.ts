import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiService {
  //because we wanna hide and show the forms(affecting the tasks component) and ALSOOO switching the button from add to close
  //=> 2 components need this info => better to use a service with an observable and a subject and the 2 components will subscribe to it
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  //what will happen when we click
  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;//switching the addTask
    this.subject.next(this.showAddTask);//passing the value to the subject
  }

  //each component that need to change when we call toggleAddTask needs to subscribe
  //to the function below
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
