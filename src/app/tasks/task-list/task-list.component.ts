import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { TaskItemComponent } from './task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent implements OnInit {
  @Input() title: string;
  tasks: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks(this.title);
    this.taskService
      .getTitleEmitter(this.title)
      .subscribe((changes: Task[]) => {
        if (changes) this.tasks = changes;
      });
  }

  onAddTask() {
    this.taskService.addTask(this.title);
  }
}
