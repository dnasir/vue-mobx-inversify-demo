<template>
  <v-text-field placeholder="Add new todo" solo v-model="title" @keypress.enter="addTodo"/>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component
  export default class extends Vue {
    title: string = '';

    addTodo() {
      this.$emit('on-add', this.title);
      this.title = '';
    }
  }
</script>
