<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Welcome from './components/Welcome.vue'

export default {
  name: 'app',
  components: {
    Welcome
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  text-align: center;

  margin-top: 0;

  nav {
    background-color: lightyellow;

    a {
      display: block;

      margin-top: 1rem;
    }
  }
}
</style>
