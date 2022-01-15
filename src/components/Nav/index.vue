<template>
  <div>
    <Transition duration="300" appear @after-enter="onNavAfterEnter">
      <div
        id="nav"
        :class="{
          fixed: fixed,
          showNav: showPositionAnimation,
          hideNav: !showPositionAnimation,
        }"
      >
        <span class="nav-title"><a href="/">ButterFly</a></span>
        <div class="nav-menus">
          <div class="nav-search-btn">
            <a @click="onShowModal">
              <span><i class="iconfont icon-sousuo"></i></span>
              <span>搜索</span>
            </a>
          </div>
          <div class="nav-menus-list">
            <div class="nav-menus-item">
              <router-link to="/">
                <span><i class="iconfont icon-shouye"></i></span>
                <span>首页</span>
              </router-link>
            </div>
            <div class="nav-menus-item nav-hover-menu">
              <a href="javascript: void(0);">
                <span><i class="iconfont icon-shejimulu"></i></span>
                <span>目录</span>
                <ul class="menu-list">
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
              </a>
            </div>
            <div class="nav-menus-item">
              <a :href="projectAddress" target="_blank">
                <span><i class="iconfont icon-liuyan"></i></span>
                <span>留言板</span>
              </a>
            </div>
          </div>
          <div class="nav-menu-collapsed" @click="onShowSider">
            <a href="javascript: ;">
              <i class="iconfont icon-dasuolvetuliebiao"></i>
            </a>
          </div>
        </div>
      </div>
    </Transition>
    <SearchModal :visible="showModal" @hide="onHideModal" />
    <SiderNav :show="showSider" @hide="onHideSider"></SiderNav>
  </div>
</template>

<script>
import SearchModal from "../SearchModal";
import SiderNav from "./SiderNav";

export default {
  inject: ["getProject"],
  components: {
    SearchModal,
    SiderNav,
  },
  mounted() {
    window.addEventListener("resize", this.onWindowResize);
    window.addEventListener("scroll", this.onWindowScroll);
    this.onWindowScroll();
    this.lastTop = document.documentElement.scrollTop;
  },
  beforeDestory() {
    window.removeEventListener("resize", this.onWindowResize);
    window.removeEventListener("scroll", this.onWindowScroll);
  },
  data() {
    return {
      show: false,
      showModal: false,
      showSider: false,
      resizeTimer: null,
      lastTop: 0,
      positionTimer: null,
      fixed: false,
      showPositionAnimation: false,
    };
  },
  computed: {
    projectAddress() {
      return this.getProject().projectAddress || "";
    }
  },
  methods: {
    onNavAfterEnter() {
      this.show = true;
    },
    onShowModal() {
      this.showModal = true;
    },
    onHideModal() {
      this.showModal = false;
    },
    onHideSider() {
      this.showSider = false;
    },
    onShowSider() {
      this.showSider = true;
    },
    onWindowResize() {
      // if (document.documentElement.clientWidth > 768) {
      // 	this.showSider = false;
      // }
      if (this.resizeTimer) return;
      this.resizeTimer = setTimeout(() => {
        if (document.documentElement.clientWidth > 768) {
          this.showSider = false;
        }
        clearTimeout(this.resizeTimer);
        this.resizeTimer = null;
      }, 100);
    },
    onWindowScroll() {
      // if (this.positionTimer) return;
      clearTimeout(this.positionTimer);
      this.positionTimer = setTimeout(() => {
        let curTop = document.documentElement.scrollTop;

        if (curTop >= 100) {
          this.fixed = true;
        } else {
          this.fixed = false;
          this.lastTop = curTop;

          clearTimeout(this.positionTimer);
          this.positionTimer = null;
          return;
        }

        if (curTop - this.lastTop <= -10) {
          // this.fixed = true;
          this.showPositionAnimation = true;
        } else {
          // this.fixed = false;
          this.showPositionAnimation = false;
        }

        this.lastTop = curTop;
      }, 100);
    },
  },
};
</script>

<style scoped>
#nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 0 36px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  font-size: 1.3em;
  align-items: center;
  transition: all 0.8s;
  animation: navOpacity 1s;
  z-index: 8000;
  user-select: none;

  color: var(--light-grey);
}

#nav.absolute {
  position: absolute;
  /* transform: translateY(-100%); */
}

@keyframes showFixedNav {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes hideFixedNav {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}

#nav.fixed {
  position: fixed;
  background-color: var(--light-grey);
  color: var(--font-color);
  text-shadow: none;
}

#nav.fixed.showNav {
  animation: showFixedNav 0.8s forwards;
}

#nav.fixed.hideNav {
  animation: hideFixedNav 0.8s forwards;
}

#nav a {
  text-decoration: none;
}

@keyframes navOpacity {
  0% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0);
  }
}

#nav.show {
  opacity: 1;
}

.nav-title {
  flex: 1;
}

.nav-menus {
  font-size: 0.78em;
  text-shadow: 0.05rem 0.05rem 0.1rem rgb(0 0 0 / 30%);
}
.nav-search-btn,
.nav-menus-item {
  display: inline-block;
  cursor: pointer;
}
.iconfont {
  margin-right: 6px;
}
.nav-menus-list {
  display: inline;
}
.nav-menus-item {
  position: relative;
  padding-left: 0.7rem;
}
#nav a {
  position: relative;
  display: inline-block;
  padding-bottom: 0.3rem;
}
#nav a:hover {
  color: var(--white);
}
#nav a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background-color: var(--hr-before-color);
  width: 0;
  transition: all 0.3s;
}
#nav a:hover::after {
  width: 101%;
}

#nav .nav-title a::after {
  display: none;
}
.nav-menu-collapsed {
  /* display: inline-block; */
  text-align: center;
  padding-left: 0.7rem;

  display: none;
}
.nav-menu-collapsed .iconfont {
  margin-right: 0;
  padding: 0 10px;
}

@media screen and (max-width: 768px) {
  .nav-menu-collapsed {
    display: inline-block;
  }
  .nav-menus-list {
    display: none;
  }
  .nav-search-btn span:last-child {
    display: none;
  }
}

.menu-list {
  display: none;
  position: absolute;
  top: 1.5rem;
  right: 0;
  margin: 0;
  padding: 0.5rem 0;
}

.nav-hover-menu:hover .menu-list {
  display: block;
}

.menu-link {
  white-space: nowrap;
  background-color: var(--sidebar-bg);
  color: var(--font-color);
  padding: 5px 10px;
  font-size: 100;
  text-shadow: none;
  transition: all 0.3s;
}

.menu-link:hover {
  background-color: var(--text-bg-hover);
  color: var(--white);
}
</style>
