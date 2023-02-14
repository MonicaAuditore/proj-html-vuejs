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
          image: "../images/oliver-ragfelt-488196-2.jpg",
        },

        {
          desc: "When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a thousand unknow plants are noticed when i hear the buzz of the little",
          autore: "Vera Duncan",
          azienda: "Amazon Inc.",
          image: "../images/oliver-ragfelt-488196-unsplash.jpg",
        },

        {
          desc: "When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a thousand unknow plants are noticed when i hear the buzz of the little",
          autore: "Vera Duncan",
          azienda: "Amazon Inc.",
          image: "../images/12679.jpg",
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
        <div class="text">
          <p>{{ testimonial.desc }}</p>
          <h4>{{ testimonial.autore }}</h4>
          <h6>{{ testimonial.azienda }}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.testimonial {
  width: 20%;
  padding: 30px;

  &:hover {
    background-image: url("../images/oliver-ragfelt-488196-2.jpg");
    background-position: center;
    color: white;
  }
}
</style>
