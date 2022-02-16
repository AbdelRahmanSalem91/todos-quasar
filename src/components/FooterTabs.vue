<template>
  <q-route-tab :icon="icon" :label="label" :to="to" />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterTabs",
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
