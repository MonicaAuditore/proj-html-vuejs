<script>
export default {
  name: "SectionAbout",
  data() {
    return {
      paragrafo: {
        secondaryTitle: "ABOUT US",
        title: "WE MAKE YOUR STRATEGY WORK",
        content:
          "When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a thousand unknow plants are noticed when i hear the buzz of the little world among the stalks, and grow familiar indescribable forms of the insect and flies, then i feel the presence of the Almighty.",
      },

      cta: {
        title: "WE HELP TO DELIVER THE BUSINESS CARE",
        description:
          "When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a thousand unknow",
      },
    };
  },
};
</script>

<template>
  <div id="about" class="mainAbout">
    <div class="about">
      <div class="aboutImg">
        <img
          src="../images/business-people-working-together-on-project-and-5FHSKBL.jpg"
        />
      </div>
      <div class="aboutText">
        <div class="titleSmall">
          <div class="line"></div>
          <div class="titleSmallText">
            <h6>{{ paragrafo.secondaryTitle }}</h6>
          </div>
        </div>
        <div class="aboutTextTitle">
          <h2>{{ paragrafo.title }}</h2>
        </div>
        <p>
          {{ paragrafo.content }}
        </p>
      </div>
      <div class="aboutTextCta">
        <div class="aboutTextCtaTitle">
          <h3>{{ cta.title }}</h3>
        </div>
        <div class="aboutTextCtaContent">
          <p>{{ cta.description }}</p>
        </div>
        <div class="aboutTextCtaButton">
          <button><h6>GET STARTED</h6></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
