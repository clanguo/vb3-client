<template>
  <div class="post-list">
    <PostItem
      v-for="item in postList"
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
import PostItem from "../../../components/PostItem";
import { getBlog } from "../../../api";
import Pager from "../../../components/Pager";

export default {
  components: {
    PostItem,
    Pager,
  },
  data() {
    return {
      postList: [],
      current: -1,
      limit: 10,
      count: Number.MAX_SAFE_INTEGER,
      requestBlock: false,
    };
  },
  created() {
    this.requestData(1, false);
  },
  methods: {
    /**
     * 请求blog数据
     * current: 要跳转到哪一页
     * willScroll: 请求得到数据后是否回到顶部
     */
    requestData(current, willScroll = false) {
      // 在请求（requestBlock == true）中 || current === 当前页 || 超出页码最大限制 则阻止请求
      if (this.requestBlock || current === this.current) return;
      if ((current - 1) * this.limit >= this.count) return;

      this.requestBlock = true;
      getBlog(current, this.limit).then((r) => {
        this.postList = r.data;
        this.current = +r.page;
        this.count = +r.count;

        willScroll && this.scrollToTop();
        this.requestBlock = false;
      });
    },

    changePager(index) {
      this.requestData(index, true);
    },

    scrollToTop() {
      let top = document.documentElement.clientHeight;
      window.scroll({
        left: 0,
        top: top,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style></style>
