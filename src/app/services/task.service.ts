import { Injectable, signal } from '@angular/core';
import { tasks } from '../mock-data';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  todos = tasks
  tasks = signal<Task[]>(this.todos)
  constructor() { }


  getAllTasks(){
    return this.tasks
  }

  updateTask(task: Task){
    let taskIndex = this.todos.findIndex((todo) => todo.id === task.id)
    this.todos.splice(taskIndex, 1)
    this.todos.splice(taskIndex, 0, task)
  }

}
