<template>
  <v-container>
    <h1 class="display-2 font-weight-bold mb-3">My Todo List</h1>
    <p>A sample Todo app demonstrating Vue + Vuetify + MobX + Inversify</p>
    <todo-input/>
    <todo-list/>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component
  export default class HomePage extends Vue {

  }
</script>
