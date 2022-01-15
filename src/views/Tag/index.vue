<template>
  <Layout>
    <template #header>
      <Header>
        <h1 class="title">标签</h1>
      </Header>
    </template>
    <template #main>
      <TwoColumnLayout>
        <template>
          <div class="tag-main">
            <h3>
              标签 {{ tagList && tagList.length ? ` - ${tagList.length}` : "" }}
            </h3>
            <ul>
              <li
                v-for="tag in tagList"
                :key="tag.id"
                :style="{
                  color: tag.color,
                  fontSize: tag.fontSize + 'em',
                }"
              >
                <router-link :to="`/tag/${tag.id}?name=${tag.name}`">{{
                  tag.name
                }}</router-link>
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
import { getTag } from "../../api";

export default {
  components: {
    Header,
    Aside,
    Layout,
    TwoColumnLayout,
  },
  created() {
    getTag().then((r) => {
      if (!r.err) {
        this.tagList = r.data.map(({ id, name }) => ({
          id,
          name,
          color: this.getRandomColor(),
          fontSize: this.getRandomFontSize(),
        }));
      }
    });
  },
  data() {
    return {
      tagList: [],
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
.tag-main h3 {
  text-align: center;
  font-size: 2.75em;
  margin: 0;
  font-weight: 300;
}

.tag-main li {
  display: inline-block;
  padding: 0 0.4rem;
  transition: all 0.3s;
}

.tag-main li:hover {
  transform: scale(1.2);
  color: #49b1f5 !important;
}
</style>
