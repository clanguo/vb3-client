<template>
  <div class="post-list">
    <PostItem
      v-for="item in renderList"
      :key="item.id"
      :postData="item"
    ></PostItem>

    <Pager
      v-if="current > 0"
      :current="current"
      :total="count"
      :limit="limit"
      @change="changePager"
    ></Pager>
  </div>
</template>

<script>
import PostItem from "../PostItem";
import Pager from "../Pager";

export default {
  components: {
    PostItem,
    Pager,
  },
  props: {
    list: [],
  },
  data() {
    return {
      current: -1,
      limit: 10,
      count: Number.MAX_SAFE_INTEGER,
      renderList: [],
    };
  },
  watch: {
    list: {
      handler() {
        this.count = this.list.length;
        this.changePager(1);
      },
      immediate: true,
    },
  },
  methods: {
    changePager(index) {
      this.current = index;
      let start = (index - 1) * this.limit;
      this.renderList = this.list.slice(start, start + this.limit);
    },
  },
};
</script>

<style>

</style>
