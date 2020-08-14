<template>
  <div>
    <Carousel />
    <Categories />
    <FeatureEvents />
  </div>
</template>

<script>
import Carousel from "../components/home/Carousel";
import Categories from "../components/home/Categories";
import FeatureEvents from "../components/home/FeatureEvents";

export default {
  components: {
    Carousel,
    Categories,
    FeatureEvents,
  },
};
</script>

<style  scoped>
</style>
