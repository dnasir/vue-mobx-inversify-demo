import idb from 'idb';
import { Todo } from '@/models/Todo';

const ctx: Worker = self as any;

export interface WorkerMessage {
  id: number;
  command: string;
  payload: Todo;
}

const dbName = 'TodoAppDb';
const storeName = 'TodoStore';

// Respond to message from parent thread
ctx.onmessage = async (ev) => {
  const { id, command, payload } = ev.data;
  const _payload: Todo = JSON.parse(payload);

  try {
    const db = await idb.open(dbName, 1, upgradeDB => {
      upgradeDB.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
    });

    const store = await db.transaction(storeName, 'readwrite').objectStore(storeName);

    switch (command) {
      case 'put':
        await store.put(_payload);
        break;
      case 'delete':
        await store.delete(_payload.id);
        break;
      case 'clear':
        await store.clear();
        break;
    }

    ctx.postMessage({
      id,
      payload: JSON.stringify(await store.getAll())
    });
  } catch (e) {
    ctx.postMessage({
      id,
      error: e.message
    });
  }
};