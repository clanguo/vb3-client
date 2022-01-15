<template>
  <div class="aside-category">
    <div class="category-title">
      <span><i class="iconfont icon-fenlei"></i></span>
      <span>分类</span>
    </div>
    <ul class="category-list">
      <li v-for="item in categories" :key="item.id">
        <a :href="`/category/${item.id}`">
          <span class="category-name">{{ item.name }}</span>
          <span class="category-count">{{ item.blogs.length }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { getCategory } from "../../api";
export default {
  // inject: ['getProject'],
  // computed: {
  // 	categories() {
  // 		let project = this.getCategory();
  // 		return (project && project.category && project.category.rows) || [];
  // 	},
  // },
  async created() {
    const { data, err } = await getCategory();
    if (!err) {
      this.categories = data;
    }
  },
  data() {
    return {
      categories: [],
    };
  },
};
</script>

<style scoped>
.category-title .iconfont {
  padding-right: 4px;
}

.category-list {
  margin-top: 1rem;
}

.category-list a {
  display: inline-block;
  padding: 0.15rem 0.5rem;
  width: 100%;
  color: var(--font-color);
  transition: all 0.4s;
}
.category-name {
  width: 80%;
  display: inline-block;
  vertical-align: bottom;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.category-count {
  display: inline-block;
  width: 20%;
  text-align: right;
}

.category-list a:hover {
  padding: 0.15rem 0.85rem;
  background-color: var(--text-bg-hover);
}
</style>
