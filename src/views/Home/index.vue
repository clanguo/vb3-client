<template>
  <Layout>
    <template #header>
      <Header>
        <template>
          <Nav></Nav>
          <SearchModal></SearchModal>
        </template>
      </Header>
    </template>
    <template #main>
      <div class="main">
        <div class="main-area">
          <PostGroup></PostGroup>
        </div>
        <div class="aside-container">
          <Aside :siteMeta="siteMeta"></Aside>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script>
import Nav from "../../components/Nav";
import SearchModal from "../../components/SearchModal";
import Header from "./components/Header";
import Aside from "../../components/Aside";
import Layout from "../../components/Layout";
import PostGroup from "./components/PostGroup";

export default {
  inject: ["getProject"],
  components: {
    Nav,
    SearchModal,
    Header,
    Aside,
    Layout,
    PostGroup,
  },
  computed: {
    siteMeta() {
      return this.getProject() || {};
    },
  },
};
</script>

<style scoped>
.main {
  display: flex;
  max-width: 1200px;
  width: 100%;
  padding: 2rem 15px;
  margin: 0 auto;
}

.main-area {
  width: 75%;
  transition: all 0.3s;
}

.aside-container {
  width: 25%;
  padding-left: 15px;
}

@media screen and (max-width: 900px) {
  .main {
    flex-direction: column;
  }

  .main-area {
    width: 100% !important;
  }

  .aside-container {
    width: 100% !important;
    padding-left: 0;
    margin-top: 1rem;
  }
}
</style>
