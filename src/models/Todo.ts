export class Todo {
  id!: number;
  title: string;
  done: boolean = false;

  constructor(title: string) {
    this.title = title;
  }
}