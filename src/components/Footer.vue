<template>
  <div id="app">
        <v-app id="inspire">
            <v-footer
                dark
                padless
                absolut
                
                
                >
                <v-card
                    class="flex"
                    flat
                    tile
                >
                    <v-card-title class="teal">
                        <strong class="subheading title-xs-center">Get connected with us on social networks!</strong>
                
                        <div class="flex-grow-1"></div>
                
                        <v-btn
                            v-for="icon in icons"
                            :key="icon"
                            class="mx-4"
                            dark
                            icon
                        >
                            <v-icon size="24px">{{ icon }}</v-icon>
                        </v-btn>
                    </v-card-title>
            
                    <v-card-actions class="grey darken-3 justify-center">
                    {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                    </v-card-actions>
                </v-card>
            </v-footer>
        </v-app>
    </div>
</template>

<script>
  export default {
      
    data: () => ({
        icons: [
            'fa fa-facebook',
            'fa fa-twitter',
            'fa fa-google-plus',
            'fa fa-linkedin',
            'fa fa-instagram',
        ],
    }),
}
</script>