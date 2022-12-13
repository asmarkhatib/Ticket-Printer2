<template>
  <v-form @submit.prevent>
    <v-card
      class="mx-16 my-3"
      max-width="344"
      title="Hurry up Book Your Ticket Now...!"
    >
      <v-container>
        <v-text-field
          v-model.trim="first"
          color="primary"
          label="First name"
          variant="underlined"
        ></v-text-field>

        <v-text-field
          v-model.trim="last"
          color="primary"
          label="Last name"
          variant="underlined"
        ></v-text-field>

        <v-select
          color="primary"
          :items="cites"
          label="From"
          v-model="from"
          variant="underlined"
        ></v-select>

        <v-select
          color="primary"
          :items="cites"
          label="To"
          v-model="to"
          variant="underlined"
        ></v-select>

        <v-text-field
          v-model.trim="persons"
          color="primary"
          label="No.of Persons"
          variant="underlined"
          type="number"
        ></v-text-field>

        <p v-if="!isValid" class="invalid">
          Please Fill Above Details Carefully...!
        </p>
      </v-container>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="success" @click="submitForm">
          Submit

          <v-icon icon="mdi-chevron-right" end></v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      cites: [
        "Aurangabad",
        "Jalna",
        "Partur",
        "Selu",
        "Manvat Road",
        "Parbhani",
        "Purna",
        "Nanded",
      ],
      first: "",
      last: "",
      from: "",
      to: "",
      persons: null,

      isValid: true,
      total: 0,
      price: 50,
    };
  },

  methods: {
    submitForm() {
      
      if (
        this.first === "" ||
        this.last === "" ||
        this.from === "" ||
        this.to === "" ||
        this.persons === null
      ) {
        this.isValid = false;
        return;
      }

      let totalCount = null;
      let count1 = null;
      let count2 = null;

      for (let i = 0; i < this.cites.length; i++) {
        if (this.from === this.cites[i]) {
          count1 = this.cites.indexOf(this.cites[i]);
        }
        if (this.to === this.cites[i]) {
          count2 = this.cites.indexOf(this.cites[i]);
        }
        totalCount = Math.abs(count1 - count2);
      }
      this.total = totalCount * this.price * this.persons;

      const data = {
        first: this.first,
        last: this.last,
        from: this.from,
        to: this.to,
        persons: this.persons,
        total: this.total,
      };

      this.$store.dispatch("sendUserData", data);
      this.$router.replace("/confirm");

      this.first = "";
      this.last = "";
      this.from = "";
      this.to = "";
      this.persons = "";
    },
  },
};
</script>

<style scoped>
.invalid {
  color: red;
}
</style>
