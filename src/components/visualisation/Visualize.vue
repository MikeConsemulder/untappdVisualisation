<template>
  <div class="Visualize">
    <h1>Hi there</h1>
    <button>make my poster</button>
  </div>
</template>

<script>
export default {
  name: "Visualize",
  data() {
    return {
      code: null,
      userToken: null
    };
  },
  mounted() {
    this.initPosterProcess();
  },
  methods: {
    initPosterProcess() {
      this.getCodeFromUrl();
      if (this.isValidCode(this.code)) {
        this.handleTheCode();
      } else {
        this.handleNoCode();
      }
    },
    getCodeFromUrl() {
      let url_string = window.location.href;
      let url = new URL(url_string);
      this.code = url.searchParams.get("code");
    },
    isValidCode(code) {
      if (code !== null) {
        return true;
      }
      return false;
    },
    handleNoCode() {
      console.log("no code provided");
    },
    handleTheCode() {
      //do request to server
      //
      this.requestAToken();
    },
    requestAToken() {
      //

      let url = `https://untappd-authenticator.herokuapp.com/api/authenticateUser?code=${
        this.code
      }`;
      let username = "onbijtkoek";
      let password = "JeMoederAanDePoeder1992";

      let headers = new Headers();

      headers.set(
        "Authorization",
        "Basic b25iaWp0a29lazpKZU1vZWRlckFhbkRlUG9lZGVyMTk5Mg=="
      );

      fetch(url, {
        method: "GET",
        headers: headers
      }).then(response => {
        console.log("yoyo", response);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>