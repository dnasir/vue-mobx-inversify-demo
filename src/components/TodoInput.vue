<template>
  <v-text-field placeholder="Add new todo" solo v-model="title" @keypress.enter="addTodo"/>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { Inject } from 'vue-inversify-decorator';
  import { ITodoRepository, ITodoRepositoryId } from '@/services/ITodoRepository';

  @Component
  export default class extends Vue {
    @Inject(ITodoRepositoryId)
    todoRepository!: ITodoRepository;

    title: string = '';

    addTodo() {
      this.todoRepository.add(this.title);
      this.title = '';
    }
  }
</script>
