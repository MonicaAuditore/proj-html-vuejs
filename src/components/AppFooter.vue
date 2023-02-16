<script>
import { store } from "../store";

export default {
  name: "AppFooter",
  data() {
    return {
      store,

      socials: [
        {
          url: "#",
          label: "fa-instagram",
        },
        {
          url: "#",
          label: "fa-linkedin-in",
        },
        {
          url: "#",
          label: "fa-facebook-f",
        },
        {
          url: "#",
          label: "fa-twitter",
        },
      ],
    };
  },
  methods: {
    toggleBtn() {
      const btns = document.querySelector(".btns");
      const add = document.getElementById("add");
      const remove = document.getElementById("remove");
      const btn = document.querySelector(".btns").querySelectorAll("a");
      btns.classList.toggle("open");
      if (btns.classList.contains("open")) {
        btn.forEach((e, i) => {
          bottom = 60 * i;
          e.style.bottom = bottom + "px";
        });
      } else {
        btn.forEach((e) => {
          e.style.bottom = "0px";
        });
      }
    },
  },
};
</script>

<template>
  <div id="contact" class="mainFooter">
    <div class="containerOne">
      <div class="footerUp">
        <div class="footerLogo link">
          <img src="../images/logotype-2-139x23.png" />
        </div>
        <div class="footerMenu">
          <ul>
            <li v-for="link in store.links">
              <a :href="link.url">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
        <div class="footerSocial">
          <ul>
            <li v-for="social in socials">
              <a :href="social.url"
                ><i :class="'fa-brands' + ' ' + social.label"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footerDown">
        <div class="footerDownLeft">
          <span class="link"
            >Terms of use<br />Privacy Environmental Policy</span
          >
        </div>
        <div class="footerDownRight">
          <span>Copyright © 2020 Phlox Consulting. All Right Reserved.</span>
          <a href="#home"
            ><span class="arrpwUp link"
              ><i class="fa-solid fa-arrow-up"></i></span
          ></a>
        </div>
      </div>
      <!-- FloatingButton -->
      <div class="fabs" @click="toggleBtn()">
        <div class="action">
          <i class="fa-regular fa-comment" id="add"></i>
          <i class="fa-solid fa-times rem" id="remove"></i>
        </div>
        <div class="btns">
          <a href="#" class="btnx env"
            ><i class="fa-regular fa-envelope"></i
          ></a>
          <a href="#" class="btnx ph"><i class="fa-solid fa-phone"></i></a>
          <a href="#" class="btnx wa"><i class="fa-brands fa-whatsapp"></i></a>
        </div>
      </div>
      <!-- FloatingButton -->
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
