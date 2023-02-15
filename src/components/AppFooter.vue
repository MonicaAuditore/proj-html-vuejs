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
      const Btns = document.querySelector(".btns");
      const add = document.getElementById("add");
      const remove = document.getElementById("remove");
      const btn = document.querySelector(".btns").querySelectorAll("a");
      Btns.classList.toggle("open");
      btn.forEach((e, i) => {
        bottom = 40 * i;
        e.style.bottom = bottom + "px";
      });
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
          <!-- <a href="#" class="btn wa"><i class="fa-brands fa-whatsapp"></i></a>
          <a href="#" class="btn env"><i class="fa-regular fa-envelope"></i></a> -->
          <a href="#" class="btn ph"><i class="fa-solid fa-phone"></i></a>
        </div>
      </div>
      <!-- FloatingButton -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fabs {
  position: fixed;
  right: 33px;
  bottom: 20px;
}

.action {
  background: #527ceb;
  height: 60px;
  width: 60px;
  border-radius: 60px;
  transition: background-color 0.4s;
}

.action i {
  position: absolute;
  color: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 25px;
  cursor: pointer;
}

.action:hover {
  background-color: #6f90e5;
}

.btns {
  position: absolute;
  bottom: 0;
  margin-bottom: 5px;
  height: 35px;
  width: 35px;
  left: 50%;
  transform: translateX(-50%);
  transition: 0.3s ease-in-out;
  z-index: -1;
}

.btns.open {
  bottom: 60px;
}

.btn {
  position: absolute;
  height: 35px;
  width: 35px;
  border-radius: 60px;
}

.wa {
  background-color: #25d366;
}

.env {
  background-color: #0099ff;
}

.ph {
  background-color: #df2029;
}

.btn i {
  position: absolute;
  font-size: 18px;
  color: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.rem {
  display: none;
}
</style>
