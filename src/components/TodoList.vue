<template>
  <div>
    <v-btn @click="todoRepository.clear()">Clear</v-btn>
    <todo
      v-for="todo in todoRepository.todos"
      :key="todo.id"
      :value="todo"
      @input="todoRepository.update($event)"
      @on-remove="todoRepository.remove($event)"
      class="mb-2"
    />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { Observer } from 'mobx-vue';
  import { Inject } from 'vue-inversify-decorator';
  import { ITodoRepository, ITodoRepositoryId } from '@/services/ITodoRepository';

  @Observer
  @Component
  export default class TodoList extends Vue {
    @Inject(ITodoRepositoryId)
    todoRepository!: ITodoRepository;
  }
</script>
