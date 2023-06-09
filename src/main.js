import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCity,
  faPhone,
  faEnvelope,
  faList,
  faEarthAmericas,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/tailwind.css";

library.add(faCity, faPhone, faEnvelope, faList, faEarthAmericas, faBars);

createApp(App)
  .use(store)
  .use(router)
  .use(MotionPlugin)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
