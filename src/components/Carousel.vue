<template>
  <div class="crousel">
    <v-carousel
    hide-delimiter-background
    show-arrows-on-hover
    delimiter-icon="mdi-minus"
    touch
    cycle
    height="400"
    >
      <v-carousel-item
        v-for="item in items"
        :key="item"
        :src="item.src"
        reverse-transition="slide-x-reverse-transition"
        transition="slide-x-transition"
      >
      </v-carousel-item>
    </v-carousel>
  </div>
  
</template>

<script>
  export default {
    name: 'carousel',
    components: {},
    data: () => ({
      items: [
          {
            src: 'https://images.unsplash.com/photo-1530308041326-e6969d6000f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
          },
          {
            src: 'https://images.unsplash.com/photo-1559738140-bc41e4e5d118?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
          },
          {
            src: 'https://images.unsplash.com/photo-1563335697-55451be2dc65?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&dl=james-barr-hSBwcfbMWO4-unsplash.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
    }), 
  }
</script>

<style scoped>
  
</style>