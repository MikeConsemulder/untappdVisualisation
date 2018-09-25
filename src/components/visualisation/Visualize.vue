<template>
  <div class="Visualize">
    <h1>Hi there</h1>
    <button>make my poster</button>
  </div>
</template>

<script>
import { Base64 } from 'js-base64';

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

      console.log('do the request!!');
      let url = `https://untappd-userinformation-stg.herokuapp.com/api/authenticateUser`;
      let username = "onbijtkoek";
      let password = "JeMoederAanDePoeder1992";

      let headers = new Headers();

      headers.append('Content-Type', 'application/json');
      headers.append(
        "Authorization",
        "Basic" + Base64.encode(username + ":" + password),
      );

      fetch(url, {
        method: "GET",
        headers: headers
      })
        .then(response => response.json())
        .then(json => console.log(json));
      //.done();

      function parseJSON(response) {
        return response.json();
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>