import { Container } from 'inversify';
import TodoRepository from './services/TodoRepository';
import { ITodoRepository, ITodoRepositoryId } from './services/ITodoRepository';
import { ITodoApiId, ITodoApi } from './api/ITodoApi';
import IDBWebWorkerStorage from './api/IDBWebWorkerStorage';

const container = new Container();
container.bind<ITodoApi>(ITodoApiId).to(IDBWebWorkerStorage);
container.bind<ITodoRepository>(ITodoRepositoryId).to(TodoRepository).inSingletonScope();

export { container };