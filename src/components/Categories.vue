<template>
    <div class="" justify-center> 
        <div class="ma-2"> 
            <v-content class="d-flex pa-2">
                <h2>Browse Categories</h2>
            </v-content>
        </div>

        <div class="ma-6">
            <v-row class="text-center ma-3">
                <v-content class="d-flex pa-2" background-color="blue">
                    <v-hover v-slot:default="{ hover }">
                    
                        <v-btn :elevation="hover ? 20 : 4" @click="redirect" src="../assets/logo/Food.svg"></v-btn>

                    </v-hover>
                    
                    <v-btn><v-icon></v-icon></v-btn>
                </v-content>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Categories',
    methods: {
        redirect(){
            //window.location.href = "https://jsfiddle.net/";

            //or 

            this.$router.push('/allevents'); // if ur using router
        }
    },
    created() {

    }
    
}
</script>

<style scoped>
    .crowl {
        height: 100px;
        width: 100px;
    }
</style>