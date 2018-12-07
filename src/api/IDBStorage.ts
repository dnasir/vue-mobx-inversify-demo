import 'reflect-metadata';
import { injectable } from 'inversify';
import idb, { DB, ObjectStore } from 'idb';
import { Todo } from '@/models/Todo';
import { ITodoApi } from '@/api/ITodoApi';

@injectable()
export default class IDBStorage implements ITodoApi {
  protected dbName = 'TodoAppDb';
  protected storeName = 'TodoStore';

  protected dbPromise: Promise<DB>;
  protected objectStore: Promise<ObjectStore<any, any>>;

  constructor() {
    this.dbPromise = idb.open(this.dbName, 1, upgradeDB => {
      upgradeDB.createObjectStore(this.storeName, { keyPath: 'id', autoIncrement: true });
    });
    this.objectStore = this.dbPromise.then(db => db.transaction(this.storeName, 'readwrite').objectStore(this.storeName))
  }

  async getStore(): Promise<ObjectStore<any, any>> {
    const db = await this.dbPromise;
    return await db.transaction(this.storeName, 'readwrite').objectStore(this.storeName);
  }

  async list(): Promise<Todo[]> {
    const store = await this.getStore();
    return await store.getAll();
  }

  async put(todo: Todo): Promise<Todo[]> {
    const store = await this.getStore();
    await store.put(todo);
    return this.list();
  }

  async delete(todo: Todo): Promise<Todo[]> {
    const store = await this.getStore();
    await store.delete(todo.id);
    return this.list();
  }

  async clear(): Promise<Todo[]> {
    const store = await this.getStore();
    await store.clear();
    return this.list();
  }
}