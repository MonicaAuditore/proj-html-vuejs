<script>
import AppTestimonials from "./AppTestimonials.vue";
import AppBlog from "./AppBlog.vue";

export default {
  name: "AppTestimonialsBlog",
  components: {
    AppTestimonials,
    AppBlog,
  },

  data() {
    return {
      test: "Hello",
    };
  },
};
</script>

<template>
  <div class="mainTestimonialsBlog">
    <AppTestimonials />
    <AppBlog />
  </div>
</template>

<style lang="scss" scoped>
.mainTestimonialsBlog {
  background-image: url("../images/img-2.png");
  background-position-y: center;
  background-size: 921px;
  background-repeat: no-repeat;
  background-position-x: unset;
}
</style>
