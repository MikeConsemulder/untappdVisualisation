<template>
  <div class="Visualize">
    <h1>Hi there</h1>
    <button>make my poster</button>
  </div>
</template>

<script>
import { Base64 } from "js-base64";

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
      console.log("do the request!!");
      let url = `https://untappd-userinformation-stg.herokuapp.com/api/authenticateUser?code=1`;
      let username = "onbijtkoek";
      let password = "JeMoederAanDePoeder1992";

      fetch(url, {
        method: "GET",
        headers: new Headers({
          Authorization: "Basic " + btoa(username + ":" + password),
          "Content-Type": "application/json",
          code: this.code
        })
      })
        .then(response => response.json())
        .then(json => {
          this.saveTokenFromMessage(json);
        })
        .catch(error => {
          console.log("the error", error);
        });
    },
    saveTokenFromMessage(jsonMessage) {
      if (typeof jsonMessage.token === "undefined") {
        return;
      }

      this.userToken = jsonMessage.token;

      console.log('the token = ', this.userToken);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style> 