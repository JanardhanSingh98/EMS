<template>
  <div class="addevent">
    <div>
      <router-view/>
    </div>

    <v-speed-dial
      v-model="fab"
      fab
      :value=activeBtn
      bottom
      right
      absolute
      :direction="direction"
      :transition="transition"
    >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          color="blue darken-2"
          dark
          fab
          
        >
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-pencil</v-icon>
        </v-btn>
      </template>
      <v-btn
        fab
        dark
        small
        color="green"
      >
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="indigo"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn
        
        fab
        dark
        small
        color="red"
        @click="goto"
      >
        <v-icon>mdi-home-city</v-icon>
      </v-btn>
    </v-speed-dial>
  </div>
</template>

<script>
export default {
  name: 'addevent',
  components: {},
  data: () => ({
    activeBtn: 0,
    direction: 'top',
    fab: false,
    fling: false,
    hover: false,
    tabs: null,
    top: false,
    right: true,
    bottom: true,
    left: false,
    transition: 'slide-y-reverse-transition',
  }),
  methods:{
    goto() {
    this.$router.push('/addevent/events')
    },
  },
  
  watch: {
      right (val) {
        this.left = !val
      },
      bottom (val) {
        this.top = !val
      },
      
    },
}
</script>

<style scoped>
  /* This is for documentation purposes and will not be needed in your application */
  #create .v-speed-dial {
    position: fixed;
  }

  #create .v-btn--floating {
    position: relative;
  }

  
</style>