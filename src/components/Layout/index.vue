<template>
  <div class="layout">
    <div class="layout-header">
      <slot name="header"></slot>
    </div>
    <div class="layout-main">
      <slot name="main"></slot>
    </div>
  </div>
</template>

<style scoped>
@keyframes layoutHeader {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes layoutMain {
  from {
    transform: translateY(50px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.layout {
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  transition: all 0.3s;
}

.layout-header,
.layout-main {
  width: 100%;
  transition: all 0.3s;
}

.layout-header {
  animation: layoutHeader 1s;
}

.layout-main {
  animation: layoutMain 1s;
}
</style>
