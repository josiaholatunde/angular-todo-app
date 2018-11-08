export class Todo {
  id: number;
  title: string;
  priority: string;
  deadlineDate: any;
  deadlineTime: any;
  status: Status;
  constructor(id: number,title:string, priority: string,deadlineDate:any, time:any, status: Status) {
    this.id = id;
    this.title = title;
    this.priority = priority;
    this.deadlineDate = deadlineDate;
    this.deadlineTime = time;
    this.status = status;
  }
}

export enum Status {
  Done,
  NotDone
}

