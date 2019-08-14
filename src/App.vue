<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <About></About>
    </v-content>
  </v-app>
</template>

<script>
import About from './views/About';

export default {
  name: 'App',
  components: {
    About
  },
  data: () => ({
    //
  }),
};
</script>
