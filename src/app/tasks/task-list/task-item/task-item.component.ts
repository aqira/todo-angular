import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Task } from '../../task.model';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input() task: Task;
  @ViewChild('taskInput', { static: true }) taskInput: ElementRef;


  constructor(private taskService: TaskService) {}

  toggleTaskCheck() {
    if (!this.task.doneDate) {
      this.task.doneDate = new Date();
    } else {
      this.task.doneDate = null;
    }
  }

  onSaveChange() {
    this.task.description = this.taskInput.nativeElement.value;
    this.taskService.editTask(this.task);
  }

  onEditTask() {
    this.task.isEditing = false;
    this.taskService.editTask(this.task);
  }

  onDeleteTask() {
    this.taskService.removeTask(this.task);
  }
}
