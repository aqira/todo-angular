import { EventEmitter, Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable()
export class TaskService {
  taskCounter: number = 0;
  tasks: Task[] = [];
  tasksChanged: EventEmitter<Task[]> = new EventEmitter<Task[]>();

  getTasks(): Task[] {
    return this.tasks.slice();
  }

  addTask() {
    const newTask = new Task(`task-${++this.taskCounter}`);
    this.tasks.push(newTask);
    this.tasksChanged.emit(this.getTasks());
  }

  editTask(task: Task) {
    const index = this.tasks.indexOf(task);
    this.tasks[index] = task;
    this.tasksChanged.emit(this.getTasks());
  }

  removeTask(task: Task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
    this.tasksChanged.emit(this.getTasks());
  }

}
