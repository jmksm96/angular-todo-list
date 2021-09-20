export interface Tasks {
  id: string;
  title: string;
  status: TaskStatuses;
}

export interface TasksResponse {
  items: Tasks[];
}

export enum TaskStatuses {
  New = 0,
  InProgress = 1,
  Completed = 2,
  Draft = 3,
}
