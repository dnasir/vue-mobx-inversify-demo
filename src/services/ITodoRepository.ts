import { Todo } from '@/models/Todo';

export const ITodoRepositoryId = Symbol.for('ITodoRepository');

export interface ITodoRepository {
  todos: Todo[];
  add(title: string): void;
  remove(todo: Todo): void;
  update(todo: Todo): void;
  clear(): void;
}