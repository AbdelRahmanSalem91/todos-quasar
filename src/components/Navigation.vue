<template>
  <q-item clickable :to="to" exact>
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ label }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navigation",
  props: {
    label: {
      type: String,
      required: true
    },

    to: {
      type: String,
      default: "/"
    },

    icon: {
      type: String,
      default: ""
    }
  }
});
</script>
