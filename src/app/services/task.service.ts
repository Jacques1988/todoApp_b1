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
    this.tasks.set(this.todos)
    return this.tasks
  }

  updateTask(task: Task){
    let taskIndex = this.todos.findIndex((todo) => todo.id === task.id)
    this.todos.splice(taskIndex, 1)
    this.todos.splice(taskIndex, 0, task)
  }


  addNewTask(task: string){
    const newTask = {
      id: (this.todos.length + 1).toString(),
      taskTitle: task,
      status: "incomplete",
      checked: false,
    }

    this.todos.push(newTask)
  }


  getCompleteTasks(){
    this.tasks.set(this.todos.filter((task) => task.status === "complete" ))
  }

  getIncompleteTasks(){
    this.tasks.set(this.todos.filter((task) => task.status === "incomplete"))
  }
}
