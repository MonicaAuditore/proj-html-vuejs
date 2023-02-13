<script>
import AppHeader from "./components/AppHeader.vue";
import SectionServices from "./components/SectionServices.vue";
import SectionAbout from "./components/SectionAbout.vue";
import SectionProjects from "./components/SectionProjects.vue";
import SectionTestimonialsBlog from "./components/SectionTestimonialsBlog.vue";

import SectionCalltoaction from "./components/SectionCalltoaction.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",

  components: {
    AppHeader,
    SectionServices,
    SectionAbout,
    SectionProjects,
    SectionTestimonialsBlog,
    SectionCalltoaction,
    AppFooter,
  },
};
</script>

<template>
  <AppHeader />
  <SectionServices />
  <SectionAbout />
  <SectionProjects />
  <SectionTestimonialsBlog />
  <SectionCalltoaction />
  <AppFooter />
</template>

<style lang="scss"></style>
