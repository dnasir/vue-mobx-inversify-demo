import { ITodoApi } from '@/api/ITodoApi';
import MyWorker from 'worker-loader?name=js/[name].js!./worker';
import { Todo } from '@/models/Todo';
import { injectable } from 'inversify';

@injectable()
export default class IDBWebWorkerStorage implements ITodoApi {
  protected worker: MyWorker;
  protected resolves = {};
  protected rejects = {};

  constructor() {
    this.worker = new MyWorker();
    this.worker.onmessage = this.handleMsg.bind(this);
  }

  handleMsg(msg) {
    if (msg && msg.data) {
      const { id, error, payload } = msg.data;

      if (error) {
        const reject = this.rejects[id];
        reject(error);
      } else {
        const resolve = this.resolves[id]
        if (resolve) {
          resolve(JSON.parse(payload));
        }
      }

      // purge used callbacks
      delete this.resolves[id];
      delete this.rejects[id];
    }
  }

  sendMsg(command, payload = null) {
    const msgId = Date.now();
    const msg = {
      id: msgId,
      command,
      payload: JSON.stringify(payload)
    };

    return new Promise((resolve, reject) => {
      // save callbacks for later
      this.resolves[msgId] = resolve;
      this.rejects[msgId] = reject;
      this.worker.postMessage(msg);
    });
  }

  list() {
    return <Promise<Todo[]>>this.sendMsg('list');
  }

  put(todo) {
    return <Promise<Todo[]>>this.sendMsg('put', todo);
  }

  delete(todo) {
    return <Promise<Todo[]>>this.sendMsg('delete', todo);
  }

  clear() {
    return <Promise<Todo[]>>this.sendMsg('clear');
  }
}