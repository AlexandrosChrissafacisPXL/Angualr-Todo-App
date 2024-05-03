export class Todo {
  id: number;
  title: string;
  completed: boolean;

  constructor(id: number, title: string, description: string, dueDate: Date, completed: boolean) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
}
