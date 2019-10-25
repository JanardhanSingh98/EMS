<template>
  <v-container class="crousel">
    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel
        hide-delimiter-background
        show-arrows-on-hover
        delimiter-icon="mdi-minus"
        touch
        
        height="400"
        >
          <v-carousel-item
            v-for="item in items"
            :key="item.id"
            :src="item.content"
            reverse-transition="slide-x-reverse-transition"
            transition="slide-x-transition"
          >
          
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    
  </v-container>
</template>

<script>
  export default {
    name: 'carousel',
    components: {},
    data: () => ({
      items: [
          {
            id: "1", content: 'https://images.unsplash.com/photo-1559738140-bc41e4e5d118?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
          },
          {
            id: "2", content: 'https://images.unsplash.com/photo-1559738140-bc41e4e5d118?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
          },
          {
            id: "3", content: 'https://images.unsplash.com/photo-1563335697-55451be2dc65?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&dl=james-barr-hSBwcfbMWO4-unsplash.jpg',
          },
          {
            id: "4", content: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
    }), 
  }
</script>

<style scoped>
  
</style>