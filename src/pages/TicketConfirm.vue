<template>
  <ul>
    <ticket-result :users="users"></ticket-result>
  </ul>
</template>

<script>
import TicketResult from "../components/TicketResult.vue";
export default {
  components: {
    TicketResult,
  },
  computed: {
    users() {
      return this.$store.getters.userInfo;
    },
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      this.$store.dispatch("getUser");
    },
  },
};
</script>
