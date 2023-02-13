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
  </header>
</template>

<style lang="scss" scoped>
.nav {
  width: 100%;
  background-color: brown;
}
.containerOne {
  width: 80%;
  margin: 0 auto;
  background-color: aquamarine;
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
  padding: 0px 5px;
}
</style>
