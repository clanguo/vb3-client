<template>
  <div class="header">
    <slot></slot>
    <div class="header-center">
      <AnimationText :text="['存在即合理']"></AnimationText>
    </div>
    <div class="scroll-btn" @click="onScrollContent">
      <span class="scroll-icon"><i class="iconfont icon-ico_open"></i></span>
    </div>
  </div>
</template>

<script>
import AnimationText from "../../../components/AnimationText";
export default {
  components: {
    AnimationText,
  },
  methods: {
    onScrollContent() {
      let height = document.documentElement.clientHeight;
      window.scroll({
        top: height,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.header {
  position: relative;
  height: 100vh;
  background-attachment: fixed;
  background-image: url("http://static.clanguo.top/assets/index.jpg");
  background-size: cover;
  background-position: center center;
  text-shadow: 0.1rem 0.1rem 0.2rem rgb(0 0 0 / 15%);
  line-height: 1.5;
}
.header-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.72em;
  color: var(--light-grey);
  z-index: 1000;
  text-align: center;
  pointer-events: none;
  user-select: none;
}
.scroll-btn {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  cursor: pointer;
  text-align: center;
}

@keyframes scrollToDown {
  0% {
    transform: translateY(0);
    opacity: 0.4;
  }
  50% {
    transform: translateY(-16px);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 0.4;
  }
}
.scroll-icon {
  display: inline-block;
  color: var(--light-grey);
  font-size: 30px;
  animation: scrollToDown 1.5s infinite;
  font-weight: 900;
}
</style>
