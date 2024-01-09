import { Component } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  taskCounter:number = 0;
  tasks: Task[] = [];

  addTask() {
    const newTask = new Task(`task-${++this.taskCounter}`, "");
    this.tasks.push(newTask);
  }
}
