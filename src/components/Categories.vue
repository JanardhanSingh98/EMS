<template>
    <div class="" justify-center> 
        <div class="ma-2"> 
            <v-content class="d-flex pa-2">
                <h2>Browse Categories</h2>
            </v-content>
        </div>

        <div class="ma-2">
            <v-row class="text-center ma-2">
                <v-content 
                v-for="button in buttons"
                :key="button"
                class="pa-3"
                >
                    
                    <v-hover v-slot:default="{ hover }" >                        
                        <v-col class="">
                            <v-btn :elevation="hover ? 20 : 4" @click="redirect" height="90" width="90" rounded >
                                <v-img height="60px" width="60px" :src="button.img"></v-img> 
                            </v-btn>
                            <br>
                            <span class="text-buttom ma-2">{{button.name}}</span>
                        </v-col>
                    </v-hover>
                        
                    
                </v-content>
            </v-row>
        </div>

    </div>
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
            {img: require('../assets/logo/entertainment.svg'), name: 'Music'},

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
    created() 
    {

    }
    
}
</script>

<style scoped>
    .crowl {
        height: 100px;
        width: 100px;
    }
</style>