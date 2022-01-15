<template>
  <div class="two-column">
    <div class="two-column-main">
      <div class="two-column-content">
        <slot></slot>
      </div>
    </div>
    <div class="two-column-aside">
      <slot name="aside"></slot>
    </div>
  </div>
</template>

<style scoped>
.two-column {
  padding: 2em 15px;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  transition: all 0.5s;

  display: flex;
  flex-wrap: nowrap;
}

.two-column-main {
  width: 75%;
}

.two-column-content {
  padding: 50px 40px;
  border-radius: 8px;
  background-color: var(--card-bg);
  box-shadow: var(--card-box-shadow);
  transition: all 0.3s;
}

.two-column-content:hover {
  box-shadow: var(--card-hover-box-shadow);
}

.two-column-aside {
  width: 25%;
  padding-left: 15px;
}

@media screen and (max-width: 900px) {
  .two-column {
    flex-direction: column;
  }
  .two-column-main {
    width: 100% !important;
  }

  .two-column-aside {
    width: 100% !important;
    padding-left: 0;
    margin-top: 1rem;
  }
}
</style>
