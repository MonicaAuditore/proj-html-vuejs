<script>
export default {
  name: "SectionServices",
  data() {
    return {
      services: [
        {
          icon: "fa-solid fa-chart-line",
          title: "STATISTICAL CONSULTING",
          description:
            "When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a",
        },

        {
          icon: "fa-solid fa-chart-line",
          title: "DIGITAL CONSULTING",
          description:
            "When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a",
        },

        {
          icon: "fa-solid fa-chart-line",
          title: "BANKING CONSULTING",
          description:
            "When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a",
        },

        {
          icon: "fa-solid fa-chart-line",
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
  <div class="mainServices">
    <div class="secondaryTitle">
      <h2>OUR CONSULTANTS CAN HELP YOU</h2>
      <span class="line"></span>
    </div>
    <div class="containerTwo">
      <div class="services">
        <div class="service" v-for="service in services">
          <div class="iconService"><i class="fa-solid fa-chart-line"></i></div>
          <div class="textService">
            <div class="titleService">
              <h2>{{ service.title }}</h2>
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
