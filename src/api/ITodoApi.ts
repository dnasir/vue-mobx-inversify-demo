import { Todo } from '@/models/Todo';

export const ITodoApiId = Symbol.for('ITodoApi');

export interface ITodoApi {
  list(): Promise<Todo[]>;
  put(todo: Todo): Promise<Todo[]>;
  delete(todo: Todo): Promise<Todo[]>;
  clear(): Promise<Todo[]>;
}