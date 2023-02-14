<script>
import { store } from "../store";

export default {
  name: "AppHeader",
  components: {},

  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <header>
    <nav class="nav">
      <div class="containerOne">
        <div class="navElements">
          <div class="logo"><img src="../images/logotype.png" /></div>
          <div class="menu">
            <ul>
              <li v-for="link in store.links">
                {{ link.label }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div class="mainBg">
      <div class="intro">
        <div class="titleSmall">
          <div class="line"></div>
          <div class="titleSmallText">
            <h6>ALWATS THE BEST WAY YOU NEED IT</h6>
          </div>
        </div>
        <div class="titleBig">
          <h1>THE BEST BUSINESS CONSULTING</h1>
        </div>
        <div class="introLinks">
          <button><h6>READ MORE</h6></button>
          <a class="play" href="#"><i class="fa-solid fa-play"></i></a>
        </div>
      </div>
      <div class="bg"></div>
      <div class="bg-img"></div>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
