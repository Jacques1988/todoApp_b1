import { Component, input, output } from '@angular/core';
import { Task } from '../../models/task';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [NgClass],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  data = input.required<Task>();
  updateTaskEvent = output()



  toggleStatus() {
    this.data().checked = !this.data().checked;
    this.data().checked ? (this.data().status = 'complete') : (this.data().status = 'incomplete');
    this.updateTask()
  }


  updateTask(){
    this.updateTaskEvent.emit()
  }
}

