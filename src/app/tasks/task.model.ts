export class Task {
  public id : string;
  public description: string;
  public creationDate: Date;
  public doneDate: Date;

  constructor(id: string, description: string) {
    this.id = id;
    this.description = description;
    this.creationDate = new Date();
    this.doneDate = null;
  }
}
