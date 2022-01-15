<template>
  <Layout>
    <template #header>
      <Header>
        <h1 class="title">{{ title }}</h1>
      </Header>
    </template>
    <template #main>
      <TwoColumnLayout>
        <template>
          <BlogList v-if="blogList.length" :list="blogList"></BlogList>
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
import BlogList from "../../components/BlogList";

export default {
  components: {
    Header,
    Aside,
    Layout,
    TwoColumnLayout,
    BlogList,
  },
  created() {
    let id = this.$route.params.id;
    getCategory(id).then((r) => {
      if (!r.err) {
        let Category = {
          id: r.data.id,
          name: r.data.name,
        };
        this.blogList = r.data.blogs.map((blog) => {
          return {
            ...blog,
            Category,
          };
        });
        this.title = r.data.name;
      }
    });
  },
  data() {
    return {
      blogList: [],
      title: this.$route.query.name || "",
    };
  },
};
</script>

<style scoped>
.title {
  font-size: 2.85em;
  color: var(--white);
  letter-spacing: 0.85rem;
}
</style>
