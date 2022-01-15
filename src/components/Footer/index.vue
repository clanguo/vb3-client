<template>
  <div class="footer">
    <div class="copyright">
      &copy; 2021 by <a href="https://github.com/clanguo/">clanguo</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  position: relative;
  width: 100%;
  background-color: var(--btn-bg);
  background-attachment: local;
  background-position: bottom center;
  background-size: cover;
  transition: bottom-top 1s;
}

.footer::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
}

.copyright {
  position: relative;
  padding: 2rem 1rem;
  color: var(--light-grep);
  text-align: center;
}

.copyright a {
  color: #000;
}
</style>
