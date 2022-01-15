<template>
  <div class="notify">
    <div class="notify-title">
      <span class="icon"><i class="iconfont icon-tongzhi"></i></span>
      <span>通知</span>
    </div>
    <div class="notify-content">
      如果你在使用中遇到问题，请到 <a :href="github" target="_blank">Github Issues</a>
       <!-- 或者<a :href="github" target="_blank">留言板</a> -->
       进行反馈
    </div>
  </div>
</template>

<script>
export default {
  inject: ["getProject"],
  computed: {
    github() {
      return this.getProject().github;
    }
  }
};
</script>

<style scoped>
@keyframes notify {
  0% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1.2);
  }
}

.notify-title {
  font-size: 1rem;
}
.notify-title .icon {
  display: inline-block;
  color: var(--btn-hover-color);
  animation: notify 1s infinite;
  padding-right: 4px;
}

.notify-content {
  margin-top: 1rem;
  color: var(--font-color);
}

a {
  color: var(--btn-bg);
}
</style>
