import { createApp } from "vue";
import { createVuetify } from "vuetify";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const app = createApp(App);

const vuetify = createVuetify({
  components,
  directives,
});

app.use(store);
app.use(router);
app.use(vuetify);

app.mount("#app");
