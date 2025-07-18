import { Component, inject } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-filter-controls',
  imports: [],
  templateUrl: './filter-controls.component.html',
  styleUrl: './filter-controls.component.css'
})
export class FilterControlsComponent {
  taskService = inject(TaskService)



  getAllTasks(){
    this.taskService.getAllTasks()
  }

  getCompleteTasks(){
    this.taskService.getCompleteTasks()
  }

  getIncompleteTasks(){
    this.taskService.getIncompleteTasks()
  }

}
