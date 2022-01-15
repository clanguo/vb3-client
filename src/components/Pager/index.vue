<template>
  <div class="pager">
    <span
      class="pager-item"
      :class="{ disable: current === 1 }"
      @click="changePager(1, current !== 1)"
      ><i class="iconfont icon-shangyiye-xianxing3-0"></i
    ></span>
    <span
      class="pager-item"
      :class="{ disable: current === 1 }"
      @click="changePager(current - 1, current !== 1)"
      ><i class="iconfont icon-shangyiyehoutuifanhui"></i
    ></span>
    <span
      class="pager-item"
      :class="{ active: index === current }"
      v-for="index in range"
      :key="index"
      @click="changePager(index, index !== current)"
      >{{ index }}</span
    >
    <span
      class="pager-item"
      :class="{ disable: current === maxPage }"
      @click="changePager(current + 1, current !== maxPage)"
      ><i class="iconfont icon-xiayiyeqianjinchakangengduo"></i
    ></span>
    <span
      class="pager-item"
      :class="{ disable: current === maxPage }"
      @click="changePager(maxPage, current !== maxPage)"
      ><i class="iconfont icon-xiayiye-xianxing3-0"></i
    ></span>
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    limit: {
      type: Number,
      required: true,
    },
    display: {
      type: Number,
      default: 7,
    },
  },
  data() {
    return {
      maxPage: 0,
      max: 0,
      min: 0,
      range: [],
    };
  },
  watch: {
    current: {
      immediate: true,
      handler(value) {
        this.reCalculate(value);
      },
    },
    total() {
      this.reCalculate(1);
    },
  },
  methods: {
    changePager(target, canDo) {
      if (!canDo) return;
      this.$emit("change", target);
    },
    reCalculate(value) {
      this.maxPage = Math.ceil(this.total / this.limit);
      this.min = Math.max(1, value - Math.floor(this.display / 2));
      this.max = Math.min(this.maxPage, this.min + this.display - 1);

      let range = [];
      for (let i = this.min; i <= this.max; i++) {
        range.push(i);
      }

      this.range = range;
    },
  },
};
</script>

<style scoped>
.pager {
  text-align: center;
  width: 100%;
  margin-top: 1rem;
  overflow: hidden;
  user-select: none;
}

.pager-item {
  display: inline-block;
  margin: 0 0.2rem;
  min-width: 1.6rem;
  height: 1.6rem;
  line-height: 1.6rem;
  cursor: pointer;
  color: var(--dark);
}

.pager-item:hover {
  color: var(--btn-bg);
}

.pager-item.active {
  cursor: default;
  color: var(--light-grey);
  background-color: var(--selection-bg);
}

.pager-item.disable {
  cursor: not-allowed;
  color: var(--disable-color);
}
</style>
