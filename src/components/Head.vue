<template>
  <div class="head">
    <v-app-bar app elevate-on-scroll color="rgba(250, 250, 250)">
      <v-app-bar-nav-icon class="d-flex d-sm-none" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>EVENTOO</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-app-bar-items class="d-none d-sm-flex my-auto">
        <v-btn :elevation="0" to="/" class="ma-1">Home</v-btn>
        <v-btn :elevation="0" to="/allevents" class="ma-1">ALL Events</v-btn>
        <v-btn :elevation="0" to="/addevent/events" class="ma-1">Add Event</v-btn>
        <v-btn :elevation="0" to="/organisers" class="ma-1">organisers</v-btn>
        <v-btn :elevation="0" to="/signin" class="ma-1">SignIn</v-btn>
      </v-app-bar-items>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" clipped fixed disable-resize-watcher>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="../assets/logo.svg" alt="user"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Janardhan Singh</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link router :to="item.route">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "head",
  data: () => ({
    lshow: "",
    drawer: false,
    items: [
      { icon: "fa-home", title: "Home", route: "/" },
      { icon: "fa-calendar", title: "All Events", route: "/allevents" },
      { icon: "fa-plus-square", title: "Host Event", route: "/addevent" },
      { icon: "fa-sitemap", title: "Organisers", route: "/organisers" },
      { icon: "fa-address-card", title: "About", route: "/about" },
      { icon: "fa-sign-in", title: "SignIn", route: "/signin" },
    ],
  }),
  created() {},
};
</script>

<style scoped></style>
