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

<style lang="scss" scoped>
.mainCarousell {
  display: flex;
  gap: 20px;
}
.imgCarousel img {
  position: relative;
}
.imgCarousel {
  width: 500px;
  height: 500px;
  opacity: 1;
  transition: all 0.5s;
  position: relative;

  &:hover {
    background-color: red;
    transition: all 0.5s;
  }

  &:hover .textCarousel {
    opacity: 1;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s;

    &:hover {
      opacity: 0.3;
      transition: all 0.5s;
    }

    &:hover .textCarousel {
      opacity: 1;
    }
  }
}

.textCarousel {
  color: white;
  top: 373px;
  left: 31px;
  opacity: 0;
}
</style>
