<template>
  <div>
    <v-btn @click="$todoRepository.clear()">Clear</v-btn>
    <todo
      v-for="todo in $todoRepository.todos"
      :key="todo.id"
      :value="todo"
      @input="$todoRepository.update($event)"
      class="mb-2"
    />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { Observer } from 'mobx-vue';

  @Observer
  @Component
  export default class TodoList extends Vue {
  }
</script>
