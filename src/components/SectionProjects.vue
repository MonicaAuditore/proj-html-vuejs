<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

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
  mounted() {
    new Swiper(".swiper-container", {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
    });
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
          <div class="arrowRight swiper-button-prev">
            <i class="fa-solid fa-arrow-left"></i>
          </div>
          <div class="arrowLeft swiper-button-next">
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>

      <div class="mainCarousell">
        <!-- inizio carosello -->
        <!-- <div class="allSlides" v-for="singleSlide in slides">
          <div class="imgCarousel">
            <img :src="'src/images/' + singleSlide.img" />
          </div>
          <div class="textCarousel">
            <div class="textInfo">
              <h3>{{ singleSlide.title }}</h3>
              <p>{{ singleSlide.categoria }}</p>
            </div>
            <div class="btnArticle">
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>
        </div> -->
        <!-- fine carosello -->
      </div>
      <!-- new -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide allSlides" v-for="singleSlide in slides">
            <div class="imgCarousel">
              <img :src="'src/images/' + singleSlide.img" />
            </div>
            <div class="textCarousel">
              <div class="textInfo">
                <h3>{{ singleSlide.title }}</h3>
                <p>{{ singleSlide.categoria }}</p>
              </div>
              <div class="btnArticle">
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.swiper-slide {
  width: calc((100% - 60px) / 3);
  /* width = (larghezza totale - spazio tra le slide) / numero di slide */
  margin-right: 30px;
}

.swiper-slide:last-child {
  margin-right: 0;
}

.swiper-container {
  overflow: hidden;
}

.swiper-button-prev:after,
.swiper-rtl .swiper-button-next:after {
  content: none;
}

.swiper-button-next:after,
.swiper-rtl .swiper-button-prev:after {
  content: none;
}

.arrowLeft {
  margin-left: 20px;
}
</style>
