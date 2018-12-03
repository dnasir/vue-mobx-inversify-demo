export class Todo {
  id: string;
  title: string;
  done: boolean = false;

  constructor(title: string) {
    this.id = Math.random().toString(36).substr(2, 9);
    this.title = title;
  }
}