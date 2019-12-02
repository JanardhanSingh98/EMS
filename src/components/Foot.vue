<template>
  <v-footer
    color="primary lighten-1 elevation-10"
    padless
    class="d-none d-sm-flex"
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        <strong>©</strong> {{ new Date().getFullYear() }} — <strong>Eventoo</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      
    }),
  }
</script>