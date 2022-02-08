<template>
  <div class="aside-statistics">
    <div class="statistics-title">
      <span><i class="iconfont icon-tongji"></i></span>
      <span>网站咨询</span>
    </div>
    <ul class="statistics-list">
      <li>
        <span class="statistics-name">文章数目</span>
        <span class="statistics-count">{{ siteInfo.blog || "-" }}</span>
      </li>
      <li>
        <span class="statistics-name">距离上次服务器启动</span>
        <span class="statistics-count">{{
          siteInfo.startTime | formatTime(true)
        }}</span>
      </li>
      <!-- <li>
        <span class="statistics-name">本站总字数</span>
        <span class="statistics-count">{{
          Math.floor(siteInfo.countWords / 1000) + " k"
        }}</span>
      </li> -->
      <li>
        <span class="statistics-name">最后更新时间</span>
        <span class="statistics-count">{{
          siteInfo.lastUpdatedTime | formatTime
        }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  inject: ["getProject"],
  computed: {
    siteInfo() {
      return this.getProject() || {};
    },
  },
};
</script>

<style scoped>
.statistics-title .iconfont {
  padding-right: 4px;
}

.statistics-list {
  margin-top: 1rem;
}

.statistics-list li {
  /* display: inline-block; */
  display: flex;
  box-sizing: border-box;
  padding: 0.15rem 0.5rem;
  width: 100%;
  color: var(--font-color);
  transition: all 0.4s;
}
.statistics-name {
  width: 80%;
  display: inline-block;
  vertical-align: bottom;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.statistics-count {
  display: inline-block;
  width: 20%;
  text-align: right;
}
</style>
