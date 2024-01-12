import { Component, OnInit } from '@angular/core';
import { ArchivedTask } from './ArchivedTask.model';
import { ArchivedService } from './archived.service';
import { Task } from '../tasks/task.model';

@Component({
  selector: 'app-archived',
  templateUrl: './archived.component.html',
  styleUrl: './archived.component.css',
})
export class ArchivedComponent implements OnInit {
  archivedTasks: ArchivedTask[] = [];

  constructor(private archivedService: ArchivedService) {}

  ngOnInit(): void {
    this.archivedTasks = this.archivedService.getArchivedTasks();
    this.archivedService.archivedTasksChanged.subscribe(
      (changes: ArchivedTask[]) => (this.archivedTasks = changes)
    );
  }
}
