import { observable } from 'mobx';

export class Todo {
  id!: number;

  @observable
  title: string;

  @observable
  done: boolean = false;

  constructor(title: string) {
    this.title = title;
  }
}