import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FilterControlsComponent } from "./filter-controls/filter-controls.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksComponent } from "./tasks/tasks.component";


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FilterControlsComponent, NewTaskComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoApp';
}
