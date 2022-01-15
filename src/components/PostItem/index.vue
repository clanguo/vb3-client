<template>
  <div class="post-item">
    <div class="post-cover" :class="{ 'img-right': imgRight }">
      <a :href="`/blog/${postData.id}`">
        <LazyImg :src="postData.poster" :alt="postData.title"></LazyImg>
      </a>
    </div>
    <div class="post-info">
      <div class="post-title">
        <a :href="`/blog/${postData.id}`">{{ postData.title }}</a>
      </div>
      <div class="post-meta">
        <span class="post-meta-date">
          <i class="iconfont icon-riqi"></i>
          发布于 {{ postData.createdAt | formatTime }}
        </span>
        <span class="post-meta-category" v-if="postData.CategoryId">
          <a :href="`/category/${postData.CategoryId}`">
            <i class="iconfont icon-fenlei"></i>
            {{ postData.Category.name }}
          </a>
        </span>
      </div>
      <div class="post-content">
        {{ postData.description }}
      </div>
    </div>
  </div>
</template>

<script>
import LazyImg from "../LazyImg";
export default {
  props: {
    imgRight: {
      type: Boolean,
      default: false,
    },
    postData: {
      type: Object,
      required: true,
    },
  },
  components: {
    LazyImg,
  },
};
</script>

<style scoped>
.post-item {
  display: flex;
  flex-direction: row;
  font-size: 14px;
  height: 20em;
  align-items: center;
  border-radius: 12px 8px 8px 12px;
  background-color: var(--card-bg);
  transition: all 0.3s;
  box-shadow: var(--card-box-shadow);
}

.post-item:not(:first-child) {
  margin-top: 1rem;
}

.post-item:hover {
  box-shadow: var(--card-hover-box-shadow);
}

.post-cover {
  overflow: hidden;
  width: 45%;
  height: 100%;
  -webkit-mask-image: -webkit-radial-gradient(#fff, #000);
  border-radius: 8px 0 0 8px;
}

.post-cover.img-right {
  order: 1;
  border-radius: 0 8px 8px 0;
}

.post-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.6s;
  transform-origin: center center;
}

.post-item:hover .post-cover img {
  transform: scale(1.1);
}

.post-info {
  overflow: hidden;
  width: 55%;
  padding: 0 40px;
}

.post-title {
  color: var(--text-highlight-color);
  margin-bottom: 0.3rem;
  font-size: 1.72em;
  line-height: 1.4;
  transition: all 0.2s ease-in-out;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  overflow: hidden;
}

.post-title a {
  text-decoration: none;
}

.post-title:hover {
  color: var(--btn-bg);
}

.post-meta {
  color: var(--meta-color);
  font-size: 0.9em;
}

.post-meta > span::after {
  content: "|";
  margin: 0 4px;
}
.post-meta > span:last-child::after {
  content: "";
}

.post-meta-category a {
  text-decoration: none;
}
.post-meta-category a:hover {
  text-decoration: underline;
  color: var(--btn-bg);
}

.post-content {
  margin-top: 0.3rem;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  line-height: 2;
}

@media screen and (max-width: 768px) {
  .post-item {
    flex-direction: column;
    /* width: 100%; */
    height: auto;
    align-items: flex-start;
  }

  .post-cover {
    order: 0 !important;
    border-radius: 8px 8px 0 0;
    width: 100%;
    height: 230px !important;
  }

  .post-info {
    padding: 1rem 1rem 1.5rem;
    width: 100%;
  }
}
</style>
