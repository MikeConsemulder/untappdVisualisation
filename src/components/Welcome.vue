<template>
  <div class="Welcome">
    <h1>Untappd Visualisation...</h1>
    <UntappdLoginButton/>
  </div>
</template>

<script>
import UntappdLoginButton from './login/UntappdLoginButton'
export default {
  name: 'Welcome',
  components: {
    UntappdLoginButton
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>