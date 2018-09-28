<template>
  <div class="Visualize">
    <h1>Hi there</h1>
    <p>
      open console.
    </p>
  </div>
</template>

<script>
export default {
  name: "Visualize",
  data() {
    return {
      code: null,
      userToken: null,
      userBeers: null,
      userInformation: null
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
      this.requestAToken();
    },
    requestAToken() {
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
      this.retrieveBeerInformation();
    },
    retrieveBeerInformation() {
      let url =
        "https://untappd-userinformation-stg.herokuapp.com/api/getbeers?access_token=" +
        this.userToken;
      let username = "onbijtkoek";
      let password = "JeMoederAanDePoeder1992";

      fetch(url, {
        method: "GET",
        headers: new Headers({
          Authorization: "Basic " + btoa(username + ":" + password),
          "Content-Type": "application/json"
        })
      })
        .then(response => response.json())
        .then(json => {
          //save the beers
          this.userBeers = json.data.beerInfo;
          this.userInfo = json.data.userInformation;
          //show the beers
          this.showBeers();
        })
        .catch(error => {
          console.log("the error", error);
        });
    },
    showBeers() {
      console.log("the beers");
      console.log(this.userBeers);
      console.log(this.userInformation);

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style> 