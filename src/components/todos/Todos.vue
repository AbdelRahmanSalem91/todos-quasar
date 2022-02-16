<template>
  <q-item
    v-ripple
    @click="updateTodo"
    clickable
    :class="!todo.completed ? 'bg-blue-1' : 'bg-green-2'"
  >
    <q-item-section side top>
      <q-checkbox v-model="todo.completed" />
    </q-item-section>
    <q-item-section>
      <q-item-label :class="{ 'text-strikeThrough': todo.completed }"
        >{{ todo.todo }}
      </q-item-label>
    </q-item-section>
    <q-item-section side>
      <div class="row">
        <div class="column q-mr-xs">
          <q-icon name="event" size="18px" />
        </div>
        <div class="column">
          <q-item-label caption>
            {{ todo.dueDate }}
          </q-item-label>
          <q-item-label caption class="text-right">
            {{ todo.dueTime }}
          </q-item-label>
        </div>
      </div>
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["todo", "id"],
  methods: {
    ...mapActions("todos", ["updateTodo"])
  }
};
</script>

<style>
</style>
