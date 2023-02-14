<script>
import { store } from "../store";

export default {
  name: "AppFooter",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="mainFooter">
    <div class="containerOne">
      <div class="footerUp">
        <div class="footerLogo">
          <img src="../images/logotype-2-139x23.png" />
        </div>
        <div class="footerMenu">
          <ul>
            <li v-for="link in store.links">
              {{ link.label }}
            </li>
          </ul>
        </div>
        <div class="footerSocial">
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
          <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i class="fa-brands fa-twitter"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.containerOne {
  width: 82%;
  margin: 0 auto;
}
.mainFooter {
  background-color: #1f1e38;
  height: 300px;
}

.footerUp {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #a0a0a0;
  padding: 70px 0px;
}

.footerSocial a {
  padding: 0px 10px;
  font-size: 20px;
}

.footerMenu ul {
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin-bottom: 0;

  li {
    margin: 0px 20px;
    color: #fff;
    font-size: 1.4rem;
    cursor: pointer;
  }
}
</style>
