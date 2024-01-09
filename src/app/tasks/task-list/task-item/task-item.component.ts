import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Task } from '../../task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input() task: Task;
  @Output() delete: EventEmitter<Task> = new EventEmitter<Task>();
  @ViewChild('taskInput', { static: true }) taskInput: ElementRef;
  isEditing: boolean = true;

  toggleTaskCheck() {
    if (!this.task.doneDate) {
      this.task.doneDate = new Date();
    } else {
      this.task.doneDate = null;
    }
  }

  saveEdit() {
    this.task.description = this.taskInput.nativeElement.value;
    this.isEditing = false;
  }

  deleteTask() {
    this.delete.emit(this.task);
  }
}
