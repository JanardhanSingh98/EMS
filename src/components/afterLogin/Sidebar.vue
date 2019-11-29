<template>
  <div>

    
      
        <v-navigation-drawer
        v-model="drawer"
        :mini-variant.sync="mini"
        permanent
        :value="activeBtn"
        expand-on-hover
        >
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
            </v-list-item-avatar>

            <v-list-item-title>John Leider</v-list-item-title>

            <v-btn
              icon
              @click.stop="mini = !mini"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense>
            <v-list-item
              v-for="item in items"
              :key="item.title"
              :to="item.route"
            >
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
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Event', icon: 'mdi-home-city', route: '/addevent/events', },
          { title: 'Forms', icon: 'mdi-accountx', route: '/allevents' },
          { title: 'Profile',icon: 'mdi-account' },
        ],
        mini: true,
      }
    },
  }
</script>