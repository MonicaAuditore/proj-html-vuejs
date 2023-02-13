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
          <div class="logo">logo</div>
          <div class="menu">
            <ul>
              <li v-for="link in store.links">{{ link.label }}</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div class="mainBg">
      <div class="bg"></div>
      <div class="bg-img"></div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: brown;
  height: 950px;
}
.nav {
  width: 100%;
  position: fixed;
  z-index: 200;
}
.containerOne {
  width: 90%;
  margin: 0 auto;
  height: 50px;
}

.navElements {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu ul {
  display: flex;
  justify-content: space-between;
  list-style: none;
}

li {
  padding: 0px 20px;
  color: #fff;
}

.bg {
  background-color: blue;
  width: 40%;
  height: 100%;
}

.bg-img {
  width: 60%;
  height: 100%;
  background-image: url(../images/portrait-of-young-architect-woman-on-meeting-KFZCE3A.jpg);
}

.bg-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mainBg {
  display: flex;
  height: 100%;
}
</style>
