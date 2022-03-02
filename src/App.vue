<template>
  <div id="app">
    <v-app id="app">
      <v-app-bar app color="primary" flat dark>
        <v-spacer></v-spacer>
        <v-toolbar-title class="title"> ~ Renewed Retreat ~ </v-toolbar-title>      
        <v-spacer></v-spacer>  
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

  data: () => ({}),
};
</script>

<style lang="scss">
@import "./scss/variables.scss";

v-app {
  font-family: $body-font-family !important;
  font-size: $font-size-root !important;  
}

v-toolbar-title {
    font-family: $title-font, cursive;
  }

#app {
  background: url("./assets/background.jpg") no-repeat center center fixed !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
}
</style>
