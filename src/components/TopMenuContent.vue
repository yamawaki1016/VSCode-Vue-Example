<template>
  <div class="menu-contents" @click="this.$emit('click-contents')">
    <div class="img-box left" :style="backImageStyle()"></div>
    <div class="text-box">
      <h4>Travels</h4>
    </div>
  </div>
</template>
<script>
export default {
  name: "TopMenuContent",
  components: {},
  props: {
    backImage: "",
    titleText: "",
    type: "",
  },
  methods: {
    backImageStyle() {
      console.log(this.backImage);
      console.log('{background-image: url("' + this.backImage + '")}');
      return '{background-image: url("' + this.backImage + '")}';
    },
    gotoTravel() {
      console.log("Travel画面に遷移");
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
  /* float: left; */
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