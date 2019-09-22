<template>
  <div class="header" >
    <v-toolbar fixed dense color="#EEEEEE" >
        <div class="hidden-sm-and-up">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" ></v-app-bar-nav-icon>
        </div>
        
        <v-toolbar-title>EMS</v-toolbar-title>

        <v-spacer></v-spacer>
        
        <div class="flex-grow-1"></div>

        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn text to="/">Home</v-btn>
            <v-btn text to="/about">About</v-btn>
            <v-btn text to="/signin">Login</v-btn>
        </v-toolbar-items>

            

            <v-navigation-drawer
            app
            v-model="drawer"
            absolute
            temporary
            height="800px"
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
                >
                <v-list-item-icon>
                    <v-icon to="/">{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list>
            </v-navigation-drawer>
        
    </v-toolbar>
  </div>
</template>

<script>
export default {
    name: 'header',
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' },
        ],
      }
    },
}
</script>

<style scoped>

</style>