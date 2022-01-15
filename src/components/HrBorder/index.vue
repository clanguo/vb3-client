<template>
  <hr
    class="hr-border"
    @mouseover="hanldeMouseMove"
    ref="hr"
    :style="{ '--percent': percent }"
  />
</template>

<script>
export default {
  data() {
    return {
      percent: 0,
      debounceTimer: null,
    };
  },
  methods: {
    hanldeMouseMove(e) {
      if (this.debounceTimer) return;
      this.timer = setTimeout(() => {
        let hrDom = this.$refs.hr;
        if (hrDom) {
          let offsetX = e.offsetX >= 0 ? e.offsetX : 0;
          offsetX =
            offsetX >= hrDom.clientWidth - 20
              ? hrDom.clientWidth - 20
              : offsetX;
          this.percent = (offsetX / hrDom.clientWidth) * 100 + "%";
        }

        clearTimeout(this.timer);
        this.timer = null;
      }, 1500);
    },
  },
};
</script>

<style scoped>
.hr-border {
  position: relative;
  margin: 1rem auto;
  height: 0;
  overflow: visible;
  border: 2px dashed var(--hr-border);
  box-sizing: border-box;
}

.hr-border::before {
  content: "\e6c1";
  font-family: "iconfont";
  position: absolute;
  top: 0;
  left: 20px;
  transform: translateY(-50%);
  color: var(--hr-before-color);
  font-size: 26px;
  font-weight: 700;
  line-height: 1;
  transition: all 0.6s;
}
.hr-border:hover::before {
  left: calc(var(--percent) + 20px);
}
</style>
