<template>
  <v-content>
    <Carousel/>
    <Categories/>
    <FeatureEvents/>
  </v-content>
  
  
</template>

<script>
import Carousel from '../components/Carousel'
import Categories from '../components/Categories'
import FeatureEvents from '../components/FeatureEvents'

export default {
  components: {
    Carousel,
    Categories,
    FeatureEvents
  },
};
</script>

<style  scoped>

</style>
