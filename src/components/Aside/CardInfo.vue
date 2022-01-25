<template>
  <div class="card-info">
    <div class="avater">
      <div class="avater-img">
        <img src="http://static.clanguo.top/assets/avater.jpg" alt="" />
      </div>
      <div class="avater-info">
        <div class="avater-info-name">零生</div>
        <div class="avater-info-desc">
          存在即合理
          <blockquote style="font-size: 1em; color: var(--blockquote-color); text-align: right; line-height: .8em">--黑格尔</blockquote>
        </div>
      </div>
    </div>
    <div class="site-data">
      <div class="site-data-item">
        <router-link to="/">
          <div class="site-data-link">
            <span class="site-data-head">文章</span>
            <span class="site-data-data">{{ cardInfo.blog || "-" }}</span>
          </div>
        </router-link>
      </div>
      <div class="site-data-item">
        <router-link to="/category">
          <div class="site-data-link">
            <span class="site-data-head">分类</span>
            <span class="site-data-data">{{ cardInfo.categories || "-" }}</span>
          </div>
        </router-link>
      </div>
      <div class="site-data-item">
        <router-link to="/tag">
          <div class="site-data-link">
            <span class="site-data-head">标签</span>
            <span class="site-data-data">{{ cardInfo.tag || "-" }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["getProject"],
  computed: {
    cardInfo() {
      return this.getProject() || {};
    },
  },
};
</script>

<style scoped>
/* .card-info {
	position: relative;
	overflow: hidden;
	padding: 1rem 1.2rem;
	border-radius: 8px;
	background-color: var(--card-bg);
	transition: all 0.3s;
	box-shadow: var(--card-box-shadow);
}
.card-info:hover {
	box-shadow: var(--card-hover-box-shadow);
} */

.avater {
  text-align: center;
}

.avater-img {
  overflow: hidden;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  margin: 0 auto;
}
.avater-img img {
  height: 100%;
  transform: rotate(0);
  transition: all 0.5s;
}

.avater-img img:hover {
  transform: rotate(360deg);
}

.avater-info-name {
  font-weight: 500;
  font-size: 1.57rem;
  line-height: 3;
}

.avater-info-desc {
  margin-top: -0.3rem;
  line-height: 2;
}

.site-data {
  padding: 0 0.5rem;
  width: 100%;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: space-around;
  line-height: 2;
}

.site-data-item {
  flex: 1;
}

.site-data-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.site-data-head {
  color: var(--font-color);
  font-weight: 100;
}
.site-data-data {
  color: var(--text-highlight-color);
}
</style>
