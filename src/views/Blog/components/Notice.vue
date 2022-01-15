<template>
  <div class="blog-notice">
    <div class="notice-card">
      <span class="meta">版权声明：</span>
      <span class="content">转载请声明<a :href="origin">出处</a></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      origin: "",
    };
  },
  created() {
    this.origin = window.location.origin;
  },
};
</script>

<style scoped>
.blog-notice {
  position: relative;
  margin: 2rem 0 1rem;
  padding: 0.5rem 0.8rem;
  border: 1px solid var(--light-grey);
  transition: all 0.3s ease-in-out;
}

.blog-notice:hover {
  box-shadow: var(--card-hover-notice-shadow);
}

.meta {
  font-weight: 700;
  color: var(--btn-bg);
}

.content {
  font-weight: 300;
}

.content a {
  color: var(--input-border);
}

.content a:hover {
  text-decoration: underline;
}
</style>
