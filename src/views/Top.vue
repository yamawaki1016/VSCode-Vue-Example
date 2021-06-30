<template>
  <div class="top">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="access-contents">
      <!-- Travel -->
      <div class="contents" @click="gotoTravel()">
        <div class="img-box left" id="travel-back-img"></div>
        <div class="text-box">
          <h4>Travels</h4>
        </div>
      </div>
      <!-- Gourmet -->
      <div class="contents" @click="gotoGourmet()">
        <div class="text-box">
          <h4>Gourmet</h4>
        </div>
        <div class="img-box left" id="gourmet-back-img"></div>
      </div>
      <!-- <TopMenuContent
        backImage="../assets/travels.jpg"
        titleText="Travels"
        @click-contents="gotoTravel()"
      /> -->
    </div>
  </div>
</template>

<script>
// import TopMenuContent from "@/components/TopMenuContent.vue";
export default {
  name: "Top",
  components: {
    // TopMenuContent,
  },
  methods: {
    gotoTravel() {
      console.log("Travel画面に遷移");
      this.$router.push("travelsTop");
    },
    gotoGourmet() {
      console.log("Gourmet画面に遷移");
    },
  },
};
</script>
<style>
.contents {
  display: flex;
}
/* .contents :hover {
  transform: scale(1, 1.1);
  transition: 0.4s;
} */
.text-box {
  background-color: #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}
.img-box {
  height: 100px;
  width: 50%;
  background-repeat: no-repeat;
  background-size: cover;
}
#travel-back-img {
  background-image: url("../assets/travels.jpg");
}
#gourmet-back-img {
  background-image: url("../assets/gourmet.jpg");
}
</style>