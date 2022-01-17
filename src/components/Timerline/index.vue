<template>
  <div class="timerline">
    <div class="timerline-contnet">
      <h2 class="timerline-title">文章总览 - {{ timeList.length }}</h2>
      <div
        class="timer-sort-year"
        v-for="listByYear in renderList"
        :key="listByYear.year"
      >
        <h3>{{ listByYear.year }}</h3>
        <ul class="timerline-year-item">
          <li
            class="timerline-item"
            v-for="item in listByYear.list"
            :key="item.id"
          >
            <!-- {{ item.title }} -->
            <router-link
              tag="div"
              :to="`/blog/${item.id}`"
              class="blog-item-cover"
            >
              <img :src="item.poster || 'http://static.clanguo.top/assets/default.png'" alt="" />
            </router-link>
            <div class="blog-item-meta">
              <span class="blog-item-date">
                <i class="iconfont icon-riqi"></i>
                <span>{{ item.timing | standardTime }}</span>
              </span>
              <router-link
                tag="span"
                :to="`/blog/${item.targetId}`"
                class="blog-item-title"
                >{{ item.target }}</router-link
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
    <Pager
      :total="list.length"
      :current="current"
      :limit="limit"
      @change="changePager"
    ></Pager>
  </div>
</template>

<script>
import Pager from "../Pager";

export default {
  components: {
    Pager,
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      timeList: [],
      current: 0,
      limit: 10,
      renderList: [],
    };
  },

  created() {
    // 按时间降序排序
  },

  watch: {
    list: {
      handler(value) {
        this.timeList = value
          .map((i) => i)
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        this.getTimeList(1);
      },
      immediate: true,
    },
  },

  methods: {
    getTimeList(current) {
      this.current = current;
      let start = (current - 1) * this.limit;
      let end = start + this.limit;
      let showList = this.timeList.slice(start, end);
      this.renderTimeLine(showList);
    },
    renderTimeLine(showList) {
      // 分类
      let sortByYear = [];
      for (const item of showList) {
        let year = new Date(item.timing).getFullYear();
        console.log(year, item, sortByYear);
        const sortYearArr = sortByYear.find((sYear) => sYear.year === year);
        if (sortYearArr === undefined) {
          sortByYear.push({
            year,
            list: [item],
          });
        } else {
          sortYearArr.list.push(item);
        }
      }

      this.renderList = sortByYear;
    },
    changePager(target) {
      // this.current = target;
      this.getTimeList(target);
    },
  },
};
</script>

<style scoped>
.timerline-title {
  font-size: 1.72em;
}

.timerline-title,
.timer-sort-year h3,
.timerline-year-item {
  position: relative;
  margin: 0;
  margin-left: 0.5rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
}

.timerline-year-item {
  padding: 0;
}

.timerline-year-item li {
  position: relative;
  padding-left: 2rem;
}

.timerline-title::before,
.timer-sort-year h3::before,
.timerline-year-item li::before {
  position: absolute;
  content: "";
  top: calc(((100% - 1.8rem) / 2));
  left: -0.45rem;
  width: 0.5rem;
  height: 0.5rem;
  border: 0.25rem solid #49b1f5;
  border-radius: 50%;
  background-color: var(--card-bg);
  line-height: 0.5rem;
  transition: all 0.3s ease-in-out;
}

.timerline-year-item li::before {
  top: 1.8rem;
}

.timerline-title::after {
  position: absolute;
  content: "";
  bottom: 0;
  left: 0;
  width: 0.1rem;
  height: 1.283em;
  background: #aadafa;
}

.timer-sort-year h3 {
  border-left: 1px solid #aadafa;
  font-size: 1.43em;
  font-weight: 300;
}

.timer-sort-year h3::before {
  width: 0.5rem;
  height: 0.5rem;
  border: 0.15rem solid #49b1f5;
}

.timerline-year-item {
  font-size: 1.1em;
  border-left: 1px solid #aadafa;
}

.timerline-title:hover::before,
.timerline-item:hover::before {
  border-color: #ff7242;
}

.timerline-item {
  display: flex;
  margin-bottom: 0.5rem;
  padding-left: 2rem;
}

.blog-item-cover {
  width: 80px;
  height: 80px;
  overflow: hidden;
}

.blog-item-cover img {
  width: 100%;
  object-fit: cover;
  transition: all 1s;
  cursor: pointer;
}

.blog-item-cover:hover img {
  transform: scale(1.1);
}

.blog-item-meta {
  padding: 0 0.8rem;
  display: flex;
  flex-direction: column;
}

.blog-item-title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: all 0.3s;
  cursor: pointer;
}

.timerline-item:hover .blog-item-title {
  color: #49b1f5;
  transform: translateX(10px);
}

.blog-item-date {
  color: #858585;
  font-size: 95%;
}

.blog-item-date span {
  padding-left: 0.3rem;
}
</style>
