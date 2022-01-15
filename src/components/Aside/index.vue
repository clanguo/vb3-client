<template>
  <div class="aside">
    <CardInfo class="aside-box" :siteMeta="siteMeta"></CardInfo>
    <Notify class="aside-box"></Notify>
    <div class="aside-sticky">
      <Category class="aside-box"></Category>
      <Statistics class="aside-box"></Statistics>
    </div>
  </div>
</template>

<script>
import CardInfo from "./CardInfo";
import Notify from "./Notify";
import Category from "./Category";
import Statistics from "./Statistics";

export default {
  props: {
    siteMeta: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    CardInfo,
    Notify,
    Category,
    Statistics,
  },
};
</script>

<style>
.aside {
  height: 100%;
}
.aside-box {
  position: relative;
  overflow: hidden;
  padding: 1rem 1.2rem;
  border-radius: 8px;
  background-color: var(--card-bg);
  transition: all 0.3s;
  box-shadow: var(--card-box-shadow);
  margin-top: 1rem;
}

.aside-box:first-child {
  margin-top: 0;
}

.aside-box:hover {
  box-shadow: var(--card-hover-box-shadow);
}

.aside-sticky {
  position: sticky !important;
  position: -webkit-sticky;
  top: 60px;
  margin-top: 1rem;
}
</style>
