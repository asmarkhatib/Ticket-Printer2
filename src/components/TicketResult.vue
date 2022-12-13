<template>
  <v-card
    class="mx-auto mt-8 bg-color"
    max-width="344"
    variant="outlined"
    color="black"
  >
    <v-card-item v-for="user in users" :key="user">
      <div>
        <div class="text-overline mb-1">
          Confirm...!
          <v-spacer></v-spacer>
          <span> <strong>Date: </strong> {{ time }} </span>
        </div>
        <div class="text-h6 mb-1">
          <h4>Mr./Mrs. {{ user.first + " " + user.last }}</h4>
        </div>
        <div class="text-caption">
          <p>Your ticket is confirm from {{ user.from }} to {{ user.to }}.</p>
        </div>
        <div class="text-caption">
          <p>Passengers: {{ user.persons }}</p>
        </div>
        <div class="text-caption">
          <p>Amount: Rs.{{ user.total }}</p>
        </div>
        <h4>We Wish you safe, comfortable and happy journey...!</h4>
      </div>
    </v-card-item>

    <v-card-actions>
      <router-link to="/form"
        ><v-btn class="ma-2" color="orange-darken-2">
          <v-icon start icon="mdi-arrow-left"></v-icon>
          Book More Tickets
        </v-btn>
       
<v-btn @click="print" variant="outlined"> Print </v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["users"],
  data() {
    return {
      show: false,
    };
  },
  computed: {
    time() {
      let date = new Date().toLocaleDateString();
      let time = new Date().toLocaleTimeString();
      const timeDate = date + " " + time;
      return timeDate;
    },
  },
  methods: {
    print() {
      window.print()
    }
  }
};
</script>

<style scoped>
.bg-color {
  background-color: whitesmoke;
}

a {
  text-decoration: none;
}
</style>
