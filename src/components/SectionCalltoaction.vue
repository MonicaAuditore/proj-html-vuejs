<script>
export default {
  name: "SectionCalltoaction",
  data() {
    return {};
  },
};
</script>

<template>
  <div class="mainCallToAction">
    <div class="boxCta">
      <div class="ctaContent">
        <h2>LET'S TALK ABOUT WORK</h2>
        <p>
          A wonderful serenity has taken possession far far<br />
          away, behind the word mountains.
        </p>
        <button><h6>GET STARTED</h6></button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.boxCta {
  height: 470px;
  background-image: url(../images/business-people-working-together-on-project-and-B3MZ4TX.jpg);
  background-position-y: bottom;
  background-repeat: no-repeat;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ctaContent p {
  color: #fff;
  padding-bottom: 30px;
}
</style>
