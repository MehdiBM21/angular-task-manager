import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TASKS} from "../mock-tasks";
import {Task} from "../Task";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  //services are generally used to stock data and manage it
  private apiUrl: string = 'http://localhost:5000/tasks';
  private httpOptions= {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  //in order to fetch data from an api, use HttpClient
  //like services for components, you need to add it as an argument of the constructor

  constructor(private http: HttpClient) {

  }

  //recommended to use observables when dealing with fetching data
  getTasks(): Observable<Task[]> {
    // const tasks = of(TASKS);
    // return tasks;
    return this.http.get<Task[]>(this.apiUrl);
  }
  deleteTask(task: Task): Observable<Task>{
    const url= `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url= `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, this.httpOptions);

  }

  addTask(task: Task) {
    return this.http.
    post<Task>(this.apiUrl, task, this.httpOptions);

  }
}
