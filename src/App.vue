<template>
  <v-app class="app">
    <Head/>
    <v-content>
      <router-view/>
    </v-content>
    <Foot/>
    <bottomNav/>
  </v-app>
</template>

<script>
import Head from './components/Head.vue';
import Foot from './components/Foot.vue';
import bottomNav from './components/bottomNav';

export default {
  name: 'App',
  components: {Head,Foot,bottomNav},
  data: () => ({
    //
  }),
};
</script>

<style >

</style>
