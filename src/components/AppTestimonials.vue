<script>
export default {
  name: "AppTestimonials",
  data() {
    return {
      test: "Hello",
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
    <div class="allTestimonials"></div>
  </div>
</template>

<style lang="scss" scoped>
.mainTestimonials {
  padding: 100px 0px;
}
.containerOne {
  width: 82%;
  margin: 0 auto;
}

.titleSmall {
  text-align: right;
}

h2 {
  color: #fff;
  padding: 20px 0px;
  text-align: right;
}

.allTestimonials {
  width: 90%;
  height: 260px;
  margin-left: 10%;
  background-color: #ffffff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.line {
  margin-right: 0px;
  float: right;
}

.titleSmallSpecial {
  text-align: center;
  color: white;
}
</style>
