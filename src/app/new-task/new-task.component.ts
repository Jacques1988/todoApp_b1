import { Component, ElementRef, viewChild, inject } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  taskService = inject(TaskService)
  newTaskInputReference = viewChild<ElementRef<HTMLInputElement>>('newTaskInput')

  

  addNewTask(){
    let newTask = this.newTaskInputReference()!.nativeElement.value
    this.taskService.addNewTask(newTask)
  }

}