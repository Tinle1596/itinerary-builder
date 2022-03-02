<template>
  <div id="app">
    <v-app id="app">
      <v-app-bar app color="primary" flat dark>
        <div class="d-flex align-center title">~ Tntt Lent Retreat ~</div>
      </v-app-bar>
      <v-main>
        <router-view />
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import "./scss/variables.scss";

v-app {
  font-family: $body-font-family !important;
  font-size: $font-size-root !important;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
}
</style>
