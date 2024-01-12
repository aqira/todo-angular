import { EventEmitter, Injectable } from '@angular/core';
import { Task } from './task.model';
import { ArchivedService } from '../archived/archived.service';

@Injectable()
export class TaskService {
  private taskMaps: Map<string, Task[]> = new Map<string, Task[]>();
  public titlesChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  private titleEmitters: Map<string, EventEmitter<Task[]>> = new Map<
    string,
    EventEmitter<Task[]>
  >();
  constructor(private archivedService: ArchivedService) {}

  getTitles(): string[] {
    return Array.from(this.taskMaps.keys());
  }

  getTitleEmitter(title: string): EventEmitter<Task[]> {
    if (!this.titleEmitters.has(title)) {
      this.titleEmitters.set(title, new EventEmitter<Task[]>());
    }
    return this.titleEmitters.get(title);
  }

  private emitTaskChanges(title: string) {
    this.titleEmitters.get(title).emit(this.getTasks(title));
  }

  addTitle(title: string) {
    if (!this.taskMaps.has(title)) {
      this.taskMaps.set(title, []);
      this.titlesChanged.emit(this.getTitles());
    }
  }

  getTasks(title: string): Task[] {
    return this.taskMaps.get(title).slice();
  }

  addTask(title: string) {
    const newTask = new Task(
      `${title}-${this.taskMaps.get(title).length + 1}`,
      title
    );
    this.taskMaps.get(title).push(newTask);
    this.emitTaskChanges(title);
  }

  editTask(task: Task) {
    const index = this.taskMaps.get(task.title).indexOf(task);
    this.taskMaps.get(task.title)[index] = task;
    this.emitTaskChanges(task.title);
  }

  removeTask(task: Task) {
    const index = this.taskMaps.get(task.title).indexOf(task);
    if (index !== -1) {
      this.taskMaps.get(task.title).splice(index, 1);
    }
    this.emitTaskChanges(task.title);
  }

  archiveTasks() {
    // loop the map
    this.taskMaps.forEach((tasks, title) => {
      const checkedTasks = tasks.filter((task) => task.doneDate !== null);
      checkedTasks.forEach((task) => {
        const index = this.taskMaps.get(title).indexOf(task);
        if (index !== -1) {
          this.taskMaps.get(title).splice(index, 1);
        }
      });
      this.emitTaskChanges(title);
      this.archivedService.createNewArchivedTasks(checkedTasks);
    });
  }
}
