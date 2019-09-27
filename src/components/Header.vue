<template>
  <div class="header" >
    <v-toolbar app  dense  fixed>
        <div class="hidden-sm-and-up">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" ></v-app-bar-nav-icon>
        </div>
        
        <v-toolbar-title>EMS</v-toolbar-title>

        <v-spacer></v-spacer>
        
        <div class="flex-grow-1"></div>

        <v-toolbar-items class="hidden-sm-and-down" >
          <v-btn text ><router-link to="/">Homeee</router-link></v-btn>
          <v-btn text ><router-link to="/allevents">All Events</router-link></v-btn>
          <v-btn text ><router-link to="/about">About</router-link></v-btn>
          <v-btn text ><router-link to="/signin">Login</router-link></v-btn>
        </v-toolbar-items>    
    </v-toolbar>

    <v-navigation-drawer
      app
      v-model="drawer"
      absolute
      temporary
      height="1000px"
      >
      <v-list-item>
          <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
          <v-list-item-title>Janardhan Singh</v-list-item-title>
          </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

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
        drawer: null,
        items: [
          { icon: 'mdi-home', title: 'Home',  route: '/' },
          { icon: 'mdi-eventbrite', title: 'All Events', route: 'allevents'},
          { icon: 'question_answer', title: 'About', route: '/about' },
          { icon: 'mdi-login', title: 'SignIn', route: '/signin' },
        ],
      }
    },
}
</script>

<style scoped>

</style>