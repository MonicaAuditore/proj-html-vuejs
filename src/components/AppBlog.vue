<script>
export default {
  name: "AppBlog",
  data() {
    return {
      test: "Hello",
    };
  },
};
</script>

<template>
  <div class="mainBlog">
    <div class="containerOne">
      <div class="titleSmall">
        <div class="line"></div>
        <div class="titleSmallText">
          <h6>BLOG</h6>
        </div>
      </div>
      <div class="blogTitleButton">
        <h2>THE RECENT NEWS YOU MUST READ IT</h2>
        <div>
          <button><h6>VIEW ALL</h6></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mainBlog {
  padding: 100px 0px;
}

.blogTitleButton {
  display: flex;
  justify-content: space-between;
}
</style>
