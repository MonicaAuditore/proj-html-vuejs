<script>
export default {
  name: "SectionAbout",
  data() {
    return {
      test: "Hello",
    };
  },
};
</script>

<template>
  <div class="mainAbout">
    <div class="about">
      <div class="aboutImg"></div>
      <div class="aboutText"></div>
      <div class="aboutTextCta"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-wrap: wrap;
}

.aboutImg {
  width: 60%;
  height: 700px;
  background-color: aquamarine;
}

.aboutText {
  width: 40%;
  height: 700px;
  background-color: pink;
}

.aboutTextCta {
  width: 90%;
  height: 260px;
  background-color: red;
}
</style>
