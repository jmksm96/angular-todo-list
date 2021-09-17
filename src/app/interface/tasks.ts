export interface Tasks {
  id: string;
  title: string;
  isDone: boolean;
}

export interface TasksResponse {
  items: Tasks[];
}
