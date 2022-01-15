<template>
  <Layout>
    <template #header>
      <Header>
        <h1 class="title">归档</h1>
      </Header>
    </template>
    <template #main>
      <TwoColumnLayout>
        <template>
          <TimerLine :list="archiveList"></TimerLine>
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
import TimerLine from "../../components/Timerline";
import Header from "../../components/Header";
import { getArchive } from "../../api";

export default {
  components: {
    Header,
    Aside,
    Layout,
    TwoColumnLayout,
    TimerLine,
  },
  created() {
    getArchive().then((r) => {
      if (!r.err) {
        this.archiveList = r.data;
      }
    });
  },
  data() {
    return {
      archiveList: [],
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
