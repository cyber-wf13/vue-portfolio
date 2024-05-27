import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTelegram, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faSun,
  faMoon,
  faCode,
  faDisplay,
  faInfo,
  faSpinner,
  faCircleExclamation,
  faArrowRightToBracket,
  faAt,
  faUpRightAndDownLeftFromCenter,
  faDownLeftAndUpRightToCenter,
  faCircleXmark,
  faHandPointer,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faSun,
  faMoon,
  faCode,
  faDisplay,
  faInfo,
  faSpinner,
  faCircleExclamation,
  faArrowRightToBracket,
  faTelegram,
  faAt,
  faGithub,
  faUpRightAndDownLeftFromCenter,
  faDownLeftAndUpRightToCenter,
  faCircleXmark,
  faHandPointer,
  faUpRightFromSquare
);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
