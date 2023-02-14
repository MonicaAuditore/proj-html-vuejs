import { reactive } from "vue";

export const store = reactive({
  links: [
    {
      label: "HOME",
      url: "#home",
    },
    {
      label: "ABOUT",
      url: "#about",
    },
    {
      label: "PROJECTS",
      url: "#projects",
    },
    {
      label: "SERVICES",
      url: "#services",
    },
    {
      label: "BLOG",
      url: "#blog",
    },
    {
      label: "CONTACT",
      url: "#contact",
    },
  ],
});
