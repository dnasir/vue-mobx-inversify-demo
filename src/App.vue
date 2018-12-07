<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { Provide } from 'vue-inversify-decorator';
  import { container } from '@/inversify.config';

  @Component
  @Provide(container)
  export default class App extends Vue { }
</script>
