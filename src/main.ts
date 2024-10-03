import { createApp } from "vue";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  FaFlag,
  RiZhihuFill,
  MdDeleteoutline,
  MdDelete,
} from "oh-vue-icons/icons";

addIcons(FaFlag, RiZhihuFill, MdDeleteoutline, MdDelete);

import "./style.css";
import App from "./App.vue";

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");
