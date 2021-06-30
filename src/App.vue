<template>
  <Header class="header" />
  <div class="main">
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    TodoList,
    Header,
  },
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  width: 100vm;
  height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
/** ------------------------------------- */
.header {
  height: 5vh;
  // background-color: darkgrey;
  color: #fff;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#fa709a),
    to(#fee140)
  );
  background-image: -webkit-linear-gradient(left, #fa709a 0%, #fee140 100%);
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
}
.main {
  flex: 1;
  background-color: rgb(245, 235, 231);
}
</style>
