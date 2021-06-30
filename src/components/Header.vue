<template>
  <div class="time">{{ this.currentTime }}</div>
</template>
<script>
import util from "@/utils/util.js";
export default {
  name: "Header",
  components: {},
  mixins: [util],
  data() {
    return {
      currentTime: "",
    };
  },
  created: function () {
    this.currentTime = this.formatDateToTime(new Date());
  },
  mounted: function () {
    let timeID = setInterval(this.getcurrentTime, 1000);
  },
  methods: {
    getcurrentTime() {
      this.currentTime = this.formatDateToTime(new Date());
    },
    /**
     * Date -> hh:mm:ssに変換
     * @param {*} date
     */
    formatDateToTime(value) {
      var hour = this.zeroPadding(value.getHours(), 2);
      var minute = this.zeroPadding(value.getMinutes(), 2);
      var second = this.zeroPadding(value.getSeconds(), 2);
      return hour + ":" + minute + ":" + second;
    },
    /**
     * 0のパディング処理
     */
    zeroPadding(num, len) {
      let zero = "";
      for (var i = 0; i < len; i++) {
        zero += "0";
      }
      return (zero + num).slice(-len);
    },
  },
};
</script>
<style>
</style>