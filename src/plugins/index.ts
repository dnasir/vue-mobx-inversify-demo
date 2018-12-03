import Vue from 'vue';
import { container } from '@/inversify.config';
import { ITodoRepository, ITodoRepositoryId } from '@/services/ITodoRepository';

Vue.prototype.$todoRepository = container.get<ITodoRepository>(ITodoRepositoryId);

// TS declaration
declare module 'vue/types/vue' {
  export interface Vue {
    $todoRepository: ITodoRepository;
  }
}