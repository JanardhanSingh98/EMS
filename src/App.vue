<template>
  <v-app class="app">
    <Header/>
    <v-content>
      <router-view/>
    </v-content>
    <Footer/>
    <bottomNav/>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import bottomNav from './components/bottomNav';

export default {
  name: 'App',
  components: {Header,Footer,bottomNav},
  data: () => ({
    //
  }),
};
</script>

<style >

</style>
