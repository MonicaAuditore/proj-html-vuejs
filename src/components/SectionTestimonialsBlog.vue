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
  <p>AppTestimonialsBlog</p>
  <AppTestimonials />
  <AppBlog />
</template>

<style lang="scss" scoped></style>
