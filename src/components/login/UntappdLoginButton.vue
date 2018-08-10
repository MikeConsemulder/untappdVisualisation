<template>
	<button class="UntappdLoginButton" v-on:click="redirectToUntappdAuth">Login with untappd</button>
</template>

<script>
export default {
  name: "UntappdLoginButton",
  methods: {
    redirectToUntappdAuth() {
      location.replace(
        "https://untappd.com/oauth/authenticate/?client_id=27634BDD2A72E0E592000A8495FB39FDE08FB44C&response_type=code&redirect_url=http://untappd.kingmike.nl/visualize"
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
