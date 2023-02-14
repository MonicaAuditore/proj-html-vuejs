import { reactive } from "vue";

export const store = reactive({
  links: [
    {
      label: "HOME",
      link: "#home",
    },
    {
      label: "ABOUT",
      link: "#about",
    },
    {
      label: "PROJECTS",
      link: "#projects",
    },
    {
      label: "SERVICES",
      link: "#services",
    },
    {
      label: "BLOG",
      link: "#blog",
    },
    {
      label: "CONTACT",
      link: "#contact",
    },
  ],
});
