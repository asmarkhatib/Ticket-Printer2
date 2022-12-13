<template>
  <div>
    <v-toolbar height="80">
      <img class="ml-8" :src="require('../assets/indlogo.png')" height="70" />

      <v-toolbar-title class="heading">INDIAN RAILWAYS</v-toolbar-title>

      <v-spacer></v-spacer>
      <img
        class="mr-5"
        :src="require('../assets/southewrn-railway.avif')"
        height="70"
      />
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <div>
        <v-app>
          <v-navigation-drawer v-model="drawer" temporary location="right">
            <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
              title="John Leider"
            >
            </v-list-item>
            <v-btn
              @click.stop="drawer = !drawer"
              class="ma-2"
              color="purple"
              icon="mdi-arrow-right"
            ></v-btn>

            <v-divider></v-divider>

            <v-list density="compact" nav>
              <v-list-item
                prepend-icon="mdi-view-dashboard"
                title="Home"
                value="home"
              ></v-list-item>
              <v-list-item
                prepend-icon="mdi-forum"
                title="About"
                value="about"
              ></v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-app>
      </div>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap");

.heading {
  font-family: "Zen Dots", cursive;

  color: blue;
}
</style>
