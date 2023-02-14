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

<style lang="scss" scoped>
.mainServices {
  padding: 100px 0px;
}

.containerTwo {
  width: 63%;
  margin: 0 auto;
}

.services {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 100px;
}

.iconService {
  background-color: red;
  height: 60px;
  width: 190px;
  border-radius: 50px;
  position: relative;
  margin-right: 50px;
}

i {
  position: absolute;
  top: 30%;
  left: 30%;
  color: white;
  font-size: 25px;
}

.service {
  display: flex;

  width: 40%;
}

h2,
p {
  color: black;
}

.line {
  height: 2px;
  // background-color: $green-bg-one;
  display: block;
  margin-right: 30px;
  width: 100%;
}

.secondaryTitle {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 358px;
  padding-bottom: 100px;
}

.secondaryTitle h2 {
  width: 60%;
  padding-right: 40px;
}
</style>
