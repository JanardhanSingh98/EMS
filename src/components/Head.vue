<template>
  <div class="head" >
    <v-app-bar app elevate-on-scroll color='rgba(250, 250, 250)'>
        
        <v-app-bar-nav-icon class="d-flex d-sm-none " @click="drawer = !drawer" ></v-app-bar-nav-icon>
        
        <v-toolbar-title @click="route">EMS</v-toolbar-title>

        <v-spacer></v-spacer>
        
        <v-app-bar-items class="d-none d-sm-flex">
          <v-btn 
          text v-for="(navItem, i) in navItems" 
          :key="i" link 
          :to="navItem.route"
          class="ma-1 "
          color="black"
          
          
          >
            {{ navItem.text }}</v-btn>
        </v-app-bar-items> 
    </v-app-bar>
    
    <v-navigation-drawer
      app
      v-model="drawer"
      clipped
      fixed
      
      disable-resize-watcher
      >
      <v-list-item>
          <v-list-item-avatar>
          <v-img src="../assets/logo.svg" alt="user"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
          <v-list-item-title >Janardhan Singh</v-list-item-title>
          </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list >

          <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          router :to="item.route"
          >
          <v-list-item-icon>
              <v-icon >{{ item.icon }}</v-icon>
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
  name: 'head',
  data: () => ({
    navItems: [
      { text: 'Home', route: '/' },
      { text: 'All Events', route: '/allevents'},
      { text: 'Add Event', route: '/addevent'},
      { text: 'Organisers', route: '/organisers'},
      { text: 'SignIn', route: '/signin' },
    ],
    drawer: false,
    items: [
      { icon: 'fa-home', title: 'Home',  route: '/' },
      { icon: 'fa-calendar', title: 'All Events', route: '/allevents'},
      { icon: 'fa-plus-square', title: 'Add Event', route: '/addevent'},
      { icon: 'fa-sitemap', title: 'Organisers', route: '/organisers'},
      { icon: 'fa-address-card', title: 'About', route: '/about' },
      { icon: 'fa-sign-in', title: 'SignIn', route: '/signin' },
    ],
  }),
  methods: 
    {
      route()
      {
          //window.location.href = "https://jsfiddle.net/";
          //or 
          this.$router.push('/'); // if ur using router
      }
    },
}
</script>

<style scoped>
</style>