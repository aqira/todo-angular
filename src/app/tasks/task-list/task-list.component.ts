import { Component } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  taskCounter: number = 0;
  tasks: Task[] = [];

  addTask() {
    const newTask = new Task(`task-${++this.taskCounter}`, '');
    console.log(newTask);
    this.tasks.push(newTask);
  }

  removeTask(task: Task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}
