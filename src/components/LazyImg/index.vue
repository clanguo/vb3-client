<template>
  <img :src="currentImg" :alt="alt" />
</template>

<script>
export default {
  inheritAttrs: true,
  props: {
    loadingImg: {
      type: String,
      default: "/assets/default.png",
    },
    src: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      currentImg: "",
      imgDom: null,
    };
  },
  created() {
    this.currentImg = this.loadingImg;
    this.img = new Image();
    this.img.onload = () => {
      this.currentImg = this.img.src;
    };
    this.img.src = this.src;
  },
};
</script>
