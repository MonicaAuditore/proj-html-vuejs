<script>
export default {
  name: "SectionServices",
  data() {
    return {
      services: [
        {
          icon: "fa-chart-line",
          title: "STATISTICAL CONSULTING",
          description:
            "When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a",
        },

        {
          icon: "fa-bullhorn",
          title: "DIGITAL CONSULTING",
          description:
            "When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a",
        },

        {
          icon: "fa-wallet",
          title: "BANKING CONSULTING",
          description:
            "When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a",
        },

        {
          icon: "fa-bullseye",
          title: "ENTERPRISE CONSULTING",
          description:
            "When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a",
        },
      ],
    };
  },
};
</script>

<template>
  <div id="services" class="mainServices">
    <div class="secondaryTitle">
      <h3>OUR CONSULTANTS CAN HELP YOU</h3>
      <span class="line"></span>
    </div>
    <div class="containerTwo">
      <div class="services">
        <div class="service" v-for="service in services">
          <div class="iconService">
            <i :class="'fa-solid' + ' ' + service.icon"></i>
          </div>
          <div class="textService">
            <div class="titleService">
              <h3>{{ service.title }}</h3>
            </div>
            <div class="descriptionService">
              <p>{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
