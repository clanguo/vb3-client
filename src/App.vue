<template>
  <div id="app">
    <router-view></router-view>
    <Footer></Footer>
    <BackTop></BackTop>
  </div>
</template>

<script>
import Footer from "./components/Footer";
import BackTop from "./components/BackTop";
import { getProject } from "./api";

export default {
  components: {
    Footer,
    BackTop,
  },
  provide() {
    return {
      // project: this.projectData,
      getProject: () => {
        return this.projectData;
      },
    };
  },
  data() {
    return {
      projectData: {},
    };
  },
  created() {
    getProject().then((data) => {
      this.projectData = data.data;
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
</style>
