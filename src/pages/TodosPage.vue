<template>
  <q-page class="q-pa-md">
    <q-list bordered separator>
      <todos v-for="(todo, key) in todos" :key="key" :todo="todo" :id="key" />
    </q-list>
  </q-page>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "TodosPage",
  components: {
    todos: require("components/todos/Todos.vue").default
  },
  setup() {
    const store = useStore();
    const todos = computed(() => store.getters.todos);
    return { todos };
  }
});
</script>
