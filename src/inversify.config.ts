import { Container } from 'inversify';
import TodoRepository from './services/TodoRepository';
import { ITodoRepository, ITodoRepositoryId } from './services/ITodoRepository';
import { ITodoApiId, ITodoApi } from './api/ITodoApi';
import IDBStorage from './api/IDBStorage';

const container = new Container();
container.bind<ITodoApi>(ITodoApiId).to(IDBStorage).inSingletonScope();
container.bind<ITodoRepository>(ITodoRepositoryId).to(TodoRepository).inSingletonScope();

export { container };