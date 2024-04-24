import { Component } from '@angular/core';
import {UiService} from "../../services/ui.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    //subscribe to UI to hav the info about the add/close
    this.subscription = this.uiService.onToggle().subscribe(
      value=> this.showAddTask = value
    );
  }
  addTask() {
    console.log('hey')
    this.uiService.toggleAddTask();
  }
  hasRoute(route: string){
    return this.router.url === route;
  }


}
