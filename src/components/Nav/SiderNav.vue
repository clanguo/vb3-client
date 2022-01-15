<template>
  <div class="sider-nav">
    <Transition name="sider" appear>
      <div class="sider-nav-container" v-if="show" @click.self="onPrevent">
        <div class="sider-nav-content">
          <div class="avater">
            <img src="/assets/avater.jpg" alt="" />
          </div>
          <div class="site-data">
            <div class="site-data-item">
              <a href="/blog">
                <div class="site-data-link">
                  <span class="site-data-head">文章</span>
                  <span class="site-data-data">{{ project.blog || "-" }}</span>
                </div>
              </a>
            </div>
            <div class="site-data-item">
              <a href="/category">
                <div class="site-data-link">
                  <span class="site-data-head">分类</span>
                  <span class="site-data-data">{{
                    project.categories || "-"
                  }}</span>
                </div>
              </a>
            </div>
            <div class="site-data-item">
              <a href="/tag">
                <div class="site-data-link">
                  <span class="site-data-head">标签</span>
                  <span class="site-data-data">{{ project.tag || "-" }}</span>
                </div>
              </a>
            </div>
          </div>
          <HrBorder class="sider-hr"></HrBorder>
          <div class="menu-list">
            <div class="menu-item">
              <router-link to="/" class="menu-link">
                <span><i class="iconfont icon-shouye"></i></span>
                <span>首页</span>
              </router-link>
            </div>
            <div class="menu-item">
              <a
                href="javascript: void(0);"
                class="menu-link"
                @click="toggleCollapse($event, 'cateMenuList')"
                data-close="0"
              >
                <span><i class="iconfont icon-shejimulu"></i></span>
                <span>目录</span>
                <span class="menu-collpase"
                  ><i class="iconfont icon-ico_open"></i
                ></span>
              </a>
              <ul class="menu-list" id="cateMenuList">
                <router-link class="menu-link" tag="li" to="/archive">
                  <span><i class="iconfont icon-guidang"></i></span>
                  <span>归档</span>
                </router-link>
                <router-link class="menu-link" tag="li" to="/tag">
                  <span><i class="iconfont icon-24gf-tags"></i></span>
                  <span>标签</span>
                </router-link>
                <router-link class="menu-link" tag="li" to="/category">
                  <span><i class="iconfont icon-fenlei1"></i></span>
                  <span>分类</span>
                </router-link>
              </ul>
            </div>
            <div class="menu-item">
              <a :href="project.projectAddress" target="_blank" class="menu-link">
                <span><i class="iconfont icon-liuyan"></i></span>
                <span>留言板</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import HrBorder from "../HrBorder";
export default {
  inject: ["getProject"],
  components: {
    HrBorder,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    project() {
      return this.getProject() || {};
    },
  },
  methods: {
    onPrevent() {
      // this.show = false;
      this.$emit("hide");
    },
    toggleCollapse(e, id) {
      let target = e.target;
      let isClose = !Number(target.dataset.close);
      let iconDom = target.querySelector(".menu-collpase");
      if (iconDom) {
        if (isClose) {
          iconDom.classList.add("close");
        } else {
          iconDom.classList.remove("close");
        }
      }
      let dom = document.querySelector("#" + id);
      if (dom) {
        dom.style.display = isClose ? "none" : "block";
      }

      target.dataset.close = +isClose;
    },
  },
};
</script>

<style scoped>
@keyframes siderNav {
  0% {
    transform: translateX(200px);
  }
  100% {
    transform: translateX(0);
  }
}
a {
  text-decoration: none;
}
.sider-nav-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--modal-bg);
  color: var(--sider-nav-color);
  line-height: 2;
  z-index: 9000;
  overflow: hidden;
}
.sider-nav-content {
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: var(--sidebar-bg);
  z-index: 8000;
  overflow-x: hidden;
  overflow-y: auto;
  transition: all 0.5s;
}
.avater {
  margin: 1rem auto;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  overflow: hidden;
}
.avater img {
  object-fit: cover;
  height: 100%;
  transition: all 0.5s;
  transform: rotate(0);
}
.avater img:hover {
  transform: rotate(360deg);
}
.site-data {
  padding: 0 0.5rem;
  width: 100%;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: space-around;
}

.site-data-item {
  flex: 1;
}

.site-data-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.site-data-head {
  color: var(--font-color);
  font-weight: 100;
}
.site-data-data {
  color: var(--text-highlight-color);
}

.menu-list {
  padding: 0 0.5rem 2rem;
}

.menu-list .menu-list {
  margin: 0;
  padding: 0;
  padding-left: 2.5em;
  animation: none;
}

.menu-link {
  position: relative;
  display: block;
  width: 100%;
  padding: 0.3rem 1.5rem 0.3rem 1.1rem;
  color: var(--font-color);
  font-size: 1.15rem;
  transition: all 0.2s;
  cursor: pointer;
}
.menu-link:hover {
  background-color: var(--text-bg-hover);
}

.menu-collpase {
  position: absolute;
  top: 0.3rem;
  right: 1em;
  transition: transform 0.3s;
}

.menu-collpase.close {
  transform: rotateZ(90deg);
}

.iconfont {
  display: inline-block;
  width: 15%;
  font-weight: 900;
  text-align: left;
}

.avater {
  animation: siderNav 0.2s;
}
.site-data {
  animation: siderNav 0.4s;
}
.sider-hr {
  animation: siderNav 0.6s;
}
.menu-list {
  animation: siderNav 0.8s;
}

.sider-enter,
.sider-leave-to {
  opacity: 0;
}
.sider-enter .sider-nav-container,
.sider-leave-to .sider-nav-container {
  transform: translateX(100%);
}
.sider-enter-active,
.sider-leave-active {
  transition: all 1s;
}

.sider-enter-active .sider-nav-container,
.sider-leave-active .sider-nav-container {
  transition: all 0.8s;
}

.sider-enter-to,
.sider-leave {
  opacity: 1;
}

.sider-enter-to .sider-nav-container,
.sider-leave .sider-nav-container {
  transform: translateX(0);
}
</style>
