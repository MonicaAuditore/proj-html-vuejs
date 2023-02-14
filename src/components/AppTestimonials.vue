<script>
export default {
  name: "AppTestimonials",
  data() {
    return {
      testimonials: [
        {
          desc: "When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a thousand unknow plants are noticed when i hear the buzz of the little",
          autore: "Vera Duncan",
          azienda: "Amazon Inc.",
          image: "oliver-ragfelt-488196-2",
        },

        {
          desc: "When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a thousand unknow plants are noticed when i hear the buzz of the little",
          autore: "Vera Duncan",
          azienda: "Amazon Inc.",
          image: "oliver-ragfelt-488196-unsplash",
        },

        {
          desc: "When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a thousand unknow plants are noticed when i hear the buzz of the little",
          autore: "Vera Duncan",
          azienda: "Amazon Inc.",
          image: "12679",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="mainTestimonials">
    <div class="containerOne">
      <div class="titleSmallSpecial">
        <div class="titleSmallText">
          <h6>TESTIMONIALS</h6>
        </div>
        <div class="line"></div>
      </div>
      <h2>WHAT'S THE CUSTOMER SAY<br />ABOUT OUR WORK</h2>
    </div>
    <div class="allTestimonials">
      <div class="testimonial" v-for="testimonial in testimonials">
        <img :src="'src/images/' + testimonial.image + '.jpg'" />
        <div class="text">
          <p>{{ testimonial.desc }}</p>
          <h4>{{ testimonial.autore }}</h4>
          <h6>{{ testimonial.azienda }}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
