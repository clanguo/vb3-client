<template>
  <Transition name="back-top">
    <div class="back-top" v-show="showBackTop">
      <div class="back-top-btn" @click="onBackTop">
        <span><i class="iconfont icon-huidaodingbu"></i></span>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  data() {
    return {
      showBackTop: false,
      timer: null,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    this.onScroll();
  },
  beforeDestory() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      if (this.timer) return;
      this.timer = setTimeout(() => {
        let top = document.documentElement.scrollTop;
        if (top >= 100) {
          this.showBackTop = true;
        } else {
          this.showBackTop = false;
        }
        clearTimeout(this.timer);
        this.timer = null;
      }, 20);
    },
    onBackTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.back-top {
  position: fixed;
  right: 0;
  bottom: 40px;
  z-index: 6000;
  transition: all 0.5s;
}
.back-top-btn {
  width: 30px;
  height: 30px;
  text-align: center;
  margin-bottom: 2px;
  font-size: 16px;
  font-weight: 900;
  background-color: var(--btn-bg);
  color: var(--btn-color);
  cursor: pointer;
  transition: all 0.3s;
}

.back-top-btn:hover {
  background-color: var(--btn-hover-color);
}

.back-top-enter,
.back-top-leave-to {
  transform: translateX(100%);
}

.back-top-enter-to,
.back-top-leave {
  transform: translateX(0);
}
</style>
