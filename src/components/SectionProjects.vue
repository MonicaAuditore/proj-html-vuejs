<script>
export default {
  name: "SectionProjects",

  data() {
    return {
      slides: [
        {
          img: "DRY-1-790x592.jpg",
          title: "Purinky Products",
          categoria: "uncategorized",
        },

        {
          img: "221bf0b7-8134-43bb-936a-5acbe42db64a-790x592.jpg",
          title: "Purinky Products",
          categoria: "uncategorized",
        },

        {
          img: "z1el4c4p-790x592.jpg",
          title: "Purinky Products",
          categoria: "uncategorized",
        },
      ],
    };
  },
};
</script>

<template>
  <div id="projects" class="mainProjects">
    <div class="containerOne">
      <div class="titleSmall">
        <div class="line"></div>
        <div class="titleSmallText">
          <h6>PROJECTS</h6>
        </div>
      </div>
      <div class="blogTitleButton">
        <h2>OUR EXPERT TRUSTED CONSULTANTS<br />HELP CLIENTS</h2>
        <div class="arrowSlider">
          <div class="arrowRight"><i class="fa-solid fa-arrow-left"></i></div>
          <div class="arrowLeft"><i class="fa-solid fa-arrow-right"></i></div>
        </div>
      </div>

      <div class="mainCarousell">
        <!-- inizio carosello -->
        <div class="allSlides" v-for="singleSlide in slides">
          <div class="imgCarousel">
            <img :src="'src/images/' + singleSlide.img" />
          </div>
          <div class="textCarousel">
            <h3>{{ singleSlide.title }}</h3>
            <p>{{ singleSlide.categoria }}</p>
          </div>
        </div>
        <!-- fine carosello -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
