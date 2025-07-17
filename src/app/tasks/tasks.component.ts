import { Component, inject } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ListComponent } from "./list/list.component";
import { Task } from '../models/task';

@Component({
  selector: 'app-tasks',
  imports: [ListComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  taskService = inject(TaskService)
  tasks = inject(TaskService).getAllTasks()


  updateTask(task: Task){
    this.taskService.updateTask(task)
  }
  
}
