import { Component, OnChanges, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
    this.taskService.tasksChanged.subscribe(
      (changes: Task[]) => (this.tasks = changes)
    );
  }

  onAddTask() {
    this.taskService.addTask();
  }
}
