<template>
  <div class="animation-text">
    {{ showText }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      timer: null,
      showText: "",
    };
  },
  watch: {
    text: {
      immediate: true,
      handler: function (arr) {
        let value = arr.length ? arr[0] : "";
        let arrIndex = 0;

        clearInterval(this.timer);
        this.timer = null;
        if (!value.length) return;
        let cnt = 1;
        let direction = 1;
        let stopCnt = 0;
        let stop = 5;
        this.timer = setInterval(() => {
          if (cnt > value.length) {
            direction = -1;
            stopCnt++;
            if (stopCnt <= stop) return;
            stopCnt = 0;
          } else if (cnt < 0) {
            direction = 1;
            stopCnt++;
            if (stopCnt <= stop) return;
            value = arr[++arrIndex % arr.length];
            stopCnt = 0;
          }
          let str = value.substr(0, cnt);
          this.showText = str.length ? str + "|" : "";
          cnt += direction;
        }, value.length * 30);
      },
    },
  },
  beforeDestory() {
    clearInterval(this.timer);
    this.timer = null;
  },
};
</script>

<style scoped></style>
