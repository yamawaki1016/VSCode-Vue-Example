<template>
  <Header class="header" />
  <div class="main">
    <img alt="Vue logo" src="./assets/logo.png" />
    <TodoList />
    <!--<router-view /> -->
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
  background-color: darkgrey;
}
.main {
  flex: 1;
  background-color: lightsalmon;
}
</style>
