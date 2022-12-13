import { createRouter, createWebHistory } from "vue-router";

import TicketForm from "../pages/TicketForm.vue";
import TicketConfirm from "../pages/TicketConfirm.vue";
import NotFound from "../components/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/form" },
    { path: "/form", component: TicketForm },
    { path: "/confirm", component: TicketConfirm },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
