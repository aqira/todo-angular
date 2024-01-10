export class Task {
  public id : string;
  public description: string;
  public creationDate: Date;
  public doneDate: Date;

  constructor(id: string) {
    this.id = id;
    this.creationDate = new Date();
  }
}
