<script>
import AppTestimonials from "./AppTestimonials.vue";
import AppBlog from "./AppBlog.vue";

export default {
  name: "SectionTestimonialsBlog",
  componenets: {
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
  <p>SectionTestimonialsBlog</p>
  <AppTestimonials />
  <AppBlog />
</template>

<style lang="scss" scoped></style>
