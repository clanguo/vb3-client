<template>
  <div
    class="header"
    :style="{
      background: `url(${img})`,
    }"
  >
    <Nav></Nav>
    <div class="header-main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Nav from "../Nav";
export default {
  components: {
    Nav,
  },
  props: {
    img: {
      type: String,
      default: "http://static.clanguo.top/assets/index.jpg",
    },
  },
};
</script>

<style scoped>
.header {
  position: relative;
  height: 20rem;
  width: 100%;
  background-color: var(--btn-bg);
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.5s;
}
.header-main {
  position: absolute;
  bottom: 5rem;
  left: 0;
  width: 100%;
  padding: 0 8%;
  text-align: center;
  color: var(--light-grey);
}
</style>
