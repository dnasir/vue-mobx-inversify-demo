<template>
  <v-card>
    <v-card-text>
      <v-layout row align-center>
        <v-flex xs1>
          <v-checkbox :input-value="value.done" @change="onDoneChanged" hide-details class="ma-0"/>
        </v-flex>
        <v-flex xs10>
          <v-text-field
            v-if="isEditing"
            :value="value.title"
            @change="onTitleChanged"
            @blur="isEditing = false"
            :autofocus="true"
          />
          <h3 v-else @click="isEditing = true">
            <template v-if="value.done">
              <del>{{ value.title }}</del>
            </template>
            <template v-else>
              {{ value.title }}
            </template>
          </h3>
        </v-flex>
        <v-flex xs1>
          <v-btn flat icon @click="$todoRepository.remove(value)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { Prop } from 'vue-property-decorator';
  import { Todo } from '@/models/Todo';

  @Component
  export default class extends Vue {
    @Prop()
    value!: Todo;

    isEditing = false;

    onTitleChanged(value: string) {
      this.$emit('input', {
        ...this.value,
        title: value
      });
      this.isEditing = false;
    }

    onDoneChanged(value: boolean) {
      this.$emit('input', {
        ...this.value,
        done: value
      });
    }
  }
</script>
