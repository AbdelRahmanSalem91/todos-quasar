<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          My Todos App
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <FooterTabs
          v-for="link in navigationLinks"
          :key="link.label"
          v-bind="link"
        />
      </q-tabs>
    </q-footer>

    <q-drawer
      dark
      :breakpoint="767"
      :width="250"
      class="bg-primary"
      v-model="leftDrawerOpen"
      show-if-above
    >
      <q-list>
        <q-item-label class="text-grey-4" header> Navigation </q-item-label>

        <Navigation
          class="text-grey-4"
          v-for="link in navigationLinks"
          :key="link.label"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Navigation from "components/Navigation.vue";
import FooterTabs from "../components/FooterTabs.vue";

const linksList = [
  {
    label: "Todos",
    icon: "list",
    to: "/"
  },
  {
    label: "Settings",
    icon: "settings",
    to: "/settings"
  }
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Layout",

  components: {
    Navigation,
    FooterTabs
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      navigationLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      }
    };
  }
});
</script>

<style scoped>
@media (min-width: 768px) {
  .q-footer {
    display: none;
  }
}
.q-drawer .q-router-link--exact-active,
.q-tab--active {
  background-color: #fff;
  color: #1976d2 !important;
}
</style>
