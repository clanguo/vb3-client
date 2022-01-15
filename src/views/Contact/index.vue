<template>
  <Layout>
    <template #header>
      <Header>
        <h1 class="title">留言板</h1>
      </Header>
    </template>
    <template #main>
      <TwoColumnLayout>
        <template>
          <Comment></Comment>
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
import Comment from "../../components/Comment";

export default {
  components: {
    Header,
    Aside,
    Layout,
    TwoColumnLayout,
    Comment,
  },
  created() {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.title {
  font-size: 2.85em;
  color: var(--white);
  letter-spacing: 0.85rem;
}
</style>
