<template>
    <v-container class="FeatureEvents" justify-center>
        <div class="ma-2"> 
            <v-content class="d-flex pa-2">
                <h2>Featured Events</h2>
            </v-content>
        </div>
        
        <v-container fluid>
            <v-layout row wrap>
                <v-flex xs12 sm12 >
                    <v-row class="ma-2">
                        <v-col v-for="(get, i) in gets" :key="i" cols="12" md="4" sm="6" xs="12" >
                            <v-content  class="pa-2">
                                <v-hover v-slot:default="{ hover }">
                                    <v-card class="ma-auto" max-width="360" :elevation="hover ? 24 : 4" flat>
                                        <v-img class="white--text" max-height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                                            <div align="right">
                                                <v-chip class="ma-2 text-uppercase font-weight-bold" color="primary" label @click="to">
                                                    {{ get.ecato }}
                                                </v-chip>
                                            </div>
                                        </v-img>

                                        <v-card-text>
                                            <span>{{ get.date1 }} - {{ get.date2 }}</span><br>
                                            <span class="text--primary font-weight-bold font-weight-black" >{{ get.ename }}</span> <br>
                                            <span class="">
                                                <span>{{ get.ename }}</span><br>
                                                <span>{{ get.adress }}</span>
                                            </span>
                                        </v-card-text> 

                                        <v-card-actions>
                                            
                                            <v-spacer></v-spacer>
                                            <v-btn text color="primary" @click="submit" v-bind:to="'/eventdetail/'+get['.key']">
                                                Explore
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-hover>
                            </v-content>
                        </v-col>
                    </v-row>
                </v-flex>
            </v-layout>
        </v-container>
    </v-container>
</template>

<script>
import { db } from '@/firebase'
export default {
    data: () => ({
        gets: [],
        get: {
          ename: null,
          ecato: null,
          date1: null,
          date2: null,
          editorData: null,
          oname: null, 
          ophone: null, 
          oemail: null,
          adress: null,
          status: null,
        },
        /*projects: [
            {cate: 'Technical', title: 'Top 10 Australian beaches', date: 'Number 10', name: 'Whitehaven Beach', place: 'Whitsunday Island, Whitsunday Islands', sorce: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'},
            {cate: 'Sports', title: 'Top 10 Australian beaches', date: 'Number 20', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
            {cate: 'Music', title: 'Top 10 Australian beaches', date: 'Number 20', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
            {cate: 'Creative', title: 'Top 10 Australian beaches', date: 'Number 20', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
        ]*/
    }),
    firestore() {
      return {
        gets: db.collection('events').where('status', '==', true)
      }
    },
    methods: {
        submit() {
            this.$router.push('/eventdetail')
        },
        to() {
            this.$router.push('/allevents')
        }
    }
}
</script>