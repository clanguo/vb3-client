<template>
  <div
    class="blog-header"
    :style="{
      background: 'url(/assets/index.jpg)',
    }"
  >
    <Nav></Nav>
    <div class="blog-header-main" v-if="$parent.blog">
      <h1 class="blog-header-title">
        {{ $parent.blog.title }}
      </h1>
      <div class="blog-header-meta">
        <span class="blog-meta-date">
          <i class="iconfont icon-riqi"></i>
          发布于 {{ $parent.blog.createdAt | formatTime }}
        </span>
        <span class="blog-meta-category" v-if="$parent.blog.Category">
          <a :href="`/category/${$parent.blog.CategoryId}`">
            <i class="iconfont icon-fenlei"></i>
            {{ $parent.blog.Category.name || "" }}
          </a>
        </span>
        <span class="blog-meta-length">
          <i class="iconfont icon-wenben"></i>
          <span>1.1 k</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
// import Nav from "../../../components/Nav";
import Nav from "../../../components/Nav";
export default {
  components: {
    Nav,
  },
};
</script>

<style scoped>
.blog-header {
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
.blog-header-main {
  position: absolute;
  bottom: 5rem;
  left: 0;
  width: 100%;
  padding: 0 8%;
  text-align: center;
  color: var(--light-grey);
}

.blog-header-title {
  margin-bottom: 0.4rem;
  color: var(--white);
  font-weight: 400;
  font-size: 2.5em;
  line-height: 1.5;

  display: -webkit-box;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  overflow: hidden;
  box-orient: vertical;
  -webkit-box-orient: vertical;
}

.blog-header-meta {
  font-size: 0.9rem;
  transition: all 0.3s;
}

.blog-meta-category:hover {
  color: var(--btn-bg);
}
</style>
