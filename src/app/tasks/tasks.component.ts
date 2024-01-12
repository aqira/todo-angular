import { Component, ElementRef, ViewChild } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.html',
})
export class TasksComponent {
  titles: string[] = [];
  @ViewChild('titleInput') titleInput: ElementRef;

  constructor(private taskService: TaskService) {
    this.titles = taskService.getTitles();
    taskService.titlesChanged.subscribe((titles) => (this.titles = titles));
  }

  onAddTitle() {
    this.taskService.addTitle(this.titleInput.nativeElement.value);
  }

  onArchiveTasks() {
    this.taskService.archiveTasks();
  }
}
