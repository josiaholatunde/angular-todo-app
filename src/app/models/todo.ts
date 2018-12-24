
export class Todo {
  id: number;
  title: string;
  priority: Priority;
  deadlineDate: any;
  deadlineTime: any;
  status: boolean;

  constructor(id: number, title: string, priority: Priority, deadlineDate: any, time: any, status: boolean) {
    this.id = id;
    this.title = title;
    this.priority = priority;
    this.deadlineDate = deadlineDate;
    this.deadlineTime = time;
    this.status = status;
  }
}

export enum Priority {
  Urgent,
  Important,
  Normal,
  NotUrgent
}

