<template>
  <div class="main-fv">
    <h1 class="header-message">峠イキタイ</h1>
  </div>
</template>

<script>
export default {
  name: "HeadMessage",
};
</script>

<style scoped lang="scss">
.header-message {
  font-weight: bold;
  font-size: 30px;
  padding-top: calc(50vh / 2 - 1em / 2);
  margin: 0;
}

.main-fv {
  height: 50vh;
  position: relative;
  background: rgba(255, 255, 255, 0.7);

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    background-image: url(~@/assets/top/main-fv.webp);
    background-size: cover;
    background-position: center;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
  }
}
</style>
