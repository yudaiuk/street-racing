<template>
  <div class="main-fv">
    <div class="main-fv-inner">
      <h1 class="header-message">
        お気に入りの峠が見つかる日本最大の峠検索サイト
      </h1>
      <img src="@/assets/top/fv-logo.webp" class="fv-logo" alt="峠イキタイ" />
    </div>
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
  font-size: 14px;
  margin: 0;
  color: white;
  margin-bottom: 10px;
}

.fv-logo {
  width: 60%;
}

.main-fv {
  height: 86vh;
  position: relative;
  background: rgba(255, 92, 92, 0.7);
  display: flex;
  align-items: center;

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
