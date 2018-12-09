import { injectable, inject, postConstruct } from 'inversify';
import { Todo } from '@/models/Todo';
import { observable } from 'mobx';
import { ITodoRepository } from './ITodoRepository';
import { ITodoApi, ITodoApiId } from '@/api/ITodoApi';
import TryCatch from '@/helpers/TryCatchDecorator';

@injectable()
export default class TodoRepository implements ITodoRepository {
  @inject(ITodoApiId)
  protected _api!: ITodoApi;

  @observable
  todos: Todo[] = [];

  @postConstruct()
  async onReady() {
    await this.list();
  }

  @TryCatch
  async list() {
    this.todos = await this._api.list();
  }

  @TryCatch
  async add(title: string) {
    this.todos = await this._api.put(new Todo(title));
  }

  @TryCatch
  async remove(todo: Todo) {
    this.todos = await this._api.delete(todo);
  }

  @TryCatch
  async update(todo: Todo) {
    this.todos = await this._api.put(todo);
  }

  @TryCatch
  async clear() {
    this.todos = await this._api.clear();
  }
}