<template>
  <v-container>
    <h1 class="display-2 font-weight-bold mb-3">Todo App</h1>
    <p>A sample Todo app demonstrating using Vue with MobX for state management, and Inversify for IoC.</p>
    <todo-input @on-add="todoRepository.add($event)"/>
    <div>
      <v-btn @click="todoRepository.clear()">Clear</v-btn>
    </div>
    <div>
      <todo
        v-for="todo in todoRepository.todos"
        :key="todo.id"
        :value="todo"
        @input="todoRepository.update($event)"
        @on-remove="todoRepository.remove($event)"
        class="mb-2"
      />
    </div>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { Observer } from 'mobx-vue';
  import { ITodoRepository, ITodoRepositoryId } from '@/services/ITodoRepository';
  import { Inject } from 'vue-inversify-decorator';

  @Observer
  @Component
  export default class HomePage extends Vue {
    @Inject(ITodoRepositoryId)
    protected todoRepository!: ITodoRepository;
  }
</script>
