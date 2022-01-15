<template>
  <Layout>
    <template #header>
      <Header>
        <h1 class="title">分类</h1>
      </Header>
    </template>
    <template #main>
      <TwoColumnLayout>
        <template>
          <div class="category-main">
            <h2>
              分类{{ categoryList.length ? ` - ${categoryList.length}` : "" }}
            </h2>
            <ul class="category-list">
              <li v-for="category in categoryList" :key="category.id">
                <router-link
                  :to="`/category/${category.id}?name=${category.name}`"
                  >{{ category.name }}</router-link
                >
                <span class="category-nums">({{ category.blogs.length }})</span>
              </li>
            </ul>
          </div>
        </template>
        <template #aside>
          <Aside></Aside>
        </template>
      </TwoColumnLayout>
    </template>
  </Layout>
</template>

<script>
import Aside from "../../components/Aside";
import Layout from "../../components/Layout";
import TwoColumnLayout from "../../components/TwoColumnLayout";
import Header from "../../components/Header";
import { getCategory } from "../../api";

export default {
  components: {
    Header,
    Aside,
    Layout,
    TwoColumnLayout,
  },
  created() {
    getCategory().then((r) => {
      // console.log(r)
      if (!r.err) {
        this.categoryList = r.data;
      }
    });
  },
  data() {
    return {
      categoryList: [],
    };
  },
  methods: {
    getRandomColor() {
      return "#" + Math.floor(Math.random() * ((2 << 24) - 1)).toString(16);
    },
    getRandomFontSize() {
      let size = [1.2, 1.5, 1.8];
      let index = Math.floor(Math.random() * size.length);
      return size[index];
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 2.85em;
  color: var(--white);
  letter-spacing: 0.85rem;
}
.category-main h2 {
  text-align: center;
  font-size: 2.75em;
  margin: 0;
  font-weight: 300;
}

.category-list {
  transition: all 0.3s;
  margin-top: 0.4rem;
  padding-left: 1rem;
}

.category-list li {
  position: relative;
  margin: 0.3rem 0;
  padding: 0.12em 0.4em 0.12em 1.4em;
  color: var(--font-color);
  transition: all 0.3s;
}

.category-list li::before {
  position: absolute;
  top: 0.65em;
  left: 0;
  width: 0.43em;
  height: 0.43em;
  content: "";
  border-radius: 50%;
  border: 0.215em solid #49b1f5;
  transition: all 0.3s;
}

.category-list li:hover {
  color: #49b1f5;
}

.category-list li:hover::before {
  border-color: #ff7242;
}

.category-nums {
  margin-left: 0.4rem;
  color: #858585;
  cursor: default;
}
</style>
