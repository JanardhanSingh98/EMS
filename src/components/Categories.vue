<template>
    <v-container class="categories" justify-center> 
        <div class="ma-2"> 
            <v-content class="d-flex pa-2">
                <h2>Browse Categories</h2>
            </v-content>
        </div>

        <v-container>
            <v-layout row wrap>
                <v-flex xs12 sm12>
                    <v-row class="text-center ma-2">
                        <v-content 
                        v-for="(button, i) in buttons"
                        :key="i"
                        class="pa-2"
                        >
                            <v-hover v-slot:default="{ hover }" >                        
                                <v-col class="">
                                    <v-btn :elevation="hover ? 20 : 4" @click="redirect" height="90" width="90" rounded >
                                        <v-img height="60px" width="60px" :src="button.img"></v-img> 
                                    </v-btn>
                                    <br>
                                    <span class="">{{button.name}}</span>
                                </v-col>
                            </v-hover>
                        </v-content>
                    </v-row>
                </v-flex>
            </v-layout>
        </v-container>

    </v-container>
</template>

<script>
export default {
    name: 'Categories',
    data: () => ({
        buttons: [
            {img: require('../assets/logo/Food.svg'), name: 'Adventure'},
            {img: require('../assets/logo/creative.svg'), name: 'Creative'},
            {img: require('../assets/logo/entertainment.svg'), name: 'Entertainment'},
            {img: require('../assets/logo/startup.svg'), name: 'Startups'},
            {img: require('../assets/logo/gaming.svg'), name: 'Gaming'},
            {img: require('../assets/logo/technical.svg'), name: 'Technical'},
            {img: require('../assets/logo/sports.svg'), name: 'Sports'},
            
            
        ]

    }),
    methods: 
    {
        redirect()
        {
            //window.location.href = "https://jsfiddle.net/";
            //or 
            this.$router.push('/allevents'); // if ur using router
        }
    },
    
    
}
</script>

<style scoped>
    .crowl {
        height: 100px;
        width: 100px;
    }
</style>