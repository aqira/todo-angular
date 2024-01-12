export class Task {
  public id: string;
  public title: string;
  public description: string;
  public creationDate: Date;
  public doneDate: Date;
  public isEditing: boolean = true;

  constructor(id: string, title: string) {
    this.id = id;
    this.title = title;
    this.doneDate = null;
    this.creationDate = new Date();
  }
}
