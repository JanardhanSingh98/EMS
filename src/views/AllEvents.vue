<template>
    <div class="allevents ">
        <!--Search bar-->
        <v-container>
            <v-layout row wrap>
                <v-flex xs12 sm12>
                    <div class="ma-2">  
                        <v-text-field v-model="search" clearable flat outlined solo filled dense hide-details
                            prepend-inner-icon="search" label="Search Events"></v-text-field>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>

        <!--Button top-->
        <div class="ma-2">
            <v-row class="text-center ma-3">
                <v-content class="d-flex pa-2 text-center">
                    <v-hover v-slot:default="{ hover }">
                    <v-btn @click="game('All')" :elevation="hover ? 20 : 4" class="ma-2 active" outlined color="indigo">All</v-btn>
                    </v-hover>
                    <v-hover v-slot:default="{ hover }">
                    <v-btn @click="game('Adventure')" :elevation="hover ? 20 : 4" class="ma-2" outlined color="indigo">Adventure</v-btn>
                    </v-hover>
                    <v-hover v-slot:default="{ hover }">
                    <v-btn @click="game('Creative')" :elevation="hover ? 20 : 4" class="ma-2" outlined color="indigo">Creative</v-btn>
                    </v-hover>
                    <v-hover v-slot:default="{ hover }">
                    <v-btn @click="game('Entertainment')" :elevation="hover ? 20 : 4" class="ma-2" outlined color="indigo">Entertainment</v-btn>
                    </v-hover>
                    <v-hover v-slot:default="{ hover }">
                    <v-btn @click="game('Startups')" :elevation="hover ? 20 : 4" class="ma-2" outlined color="indigo">Startups</v-btn>
                    </v-hover>
                    <v-hover v-slot:default="{ hover }">
                    <v-btn @click="game('Gaming')" :elevation="hover ? 20 : 4" class="ma-2" outlined color="indigo">Gaming </v-btn>
                    </v-hover>
                    <v-hover v-slot:default="{ hover }">
                    <v-btn @click="game('Technical')" :elevation="hover ? 20 : 4" class="ma-2" outlined color="indigo">Technical</v-btn>
                    </v-hover>
                    <v-hover v-slot:default="{ hover }">
                    <v-btn @click="game('Sports')" :elevation="hover ? 20 : 4" class="ma-2" outlined color="indigo">Sports</v-btn>
                    </v-hover>
                    <v-hover v-slot:default="{ hover }">
                    <v-btn @click="game('Music')" :elevation="hover ? 20 : 4" class="ma-2" outlined color="indigo">Music</v-btn>
                    </v-hover>
                </v-content>
            </v-row>
        </div>

        <!--Button top2-->
        <v-container>
            <v-layout row wrap>
                <v-flex xs12 sm12>
                    <div class="ma-2" >
                        <v-row class="text-center ma-3">
                            <v-content class="d-flex pa-2 text-center">
                            <v-hover v-slot:default="{ hover }">
                                <v-btn class="ma-2" :elevation="hover ? 20 : 4" outlined color="indigo" >All</v-btn>
                            </v-hover>
                            <v-hover v-slot:default="{ hover }">
                                <v-btn class="ma-2" :elevation="hover ? 20 : 4" outlined color="indigo" >Today</v-btn>
                            </v-hover>
                            <v-hover v-slot:default="{ hover }">
                                <v-btn class="ma-2" :elevation="hover ? 20 : 4" outlined color="indigo" >Tomorrow</v-btn>
                            </v-hover>
                            <v-hover v-slot:default="{ hover }">
                                <v-btn class="ma-2" :elevation="hover ? 20 : 4" outlined color="indigo" >Weekend</v-btn>
                            </v-hover>                  
                            </v-content>
                        </v-row>
                    </div >
                </v-flex>
            </v-layout>
        </v-container>

        <!--Filter b date and sorting-->
        <v-container>
            <v-layout row wrap>
                <v-flex xs12 sm12>
                    <div class="ma-2">
                        <v-row class="ma-3" >
                            <v-col cols="4" lg="2" class="">
                                <v-menu v-model="menu1" :close-on-content-click="false" transition="scale-transition" max-width="290">
                                    <template v-slot:activator="{ on }">
                                        <v-text-field v-model="filterDate"  clearable label="Filter By Date" readonly v-on="on"></v-text-field>
                                    </template>
                                    <v-date-picker v-model="filterDate" @change="menu1 = false"></v-date-picker>
                                    </v-menu>
                            </v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="4" lg="2">
                                <v-spacer></v-spacer>
                                <template >
                                    <v-spacer></v-spacer>
                                    <v-select clearable flat hide-details :items="keys" prepend-inner-icon="search" label="Sort by"></v-select>
                                    
                                </template>
                            </v-col>
                        </v-row>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>

        <!--Events-->
        <v-container>
            <v-layout row wrap>
                <v-flex xs="12" sm="12">
                    <v-row class="ma-2" >
                        <v-col v-for="(get, i) in gets" v-bind:key="i" cols="12" md="4" sm="6" xs="12">
                            <v-content  class="pa-2">
                                <v-hover v-slot:default="{ hover }">
                                    <v-card class="ma-auto" max-width="350" :elevation="hover ? 24 : 4">
                                        <v-img class="white--text" max-height="200px" src="https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2016/12/16131147/future-phone-mobile-live-events-technology-trends.png">
                                            <div align="right">
                                                <v-chip class="ma-2 text-uppercase font-weight-bold" color="primary" label @click="to">
                                                    {{get.ecato}}
                                                </v-chip>
                                            </div>
                                        </v-img>

                                        <v-card-text>
                                            <span>{{ get.date1 }} - {{ get.date2 }}</span><br>
                                            <span class="text--primary font-weight-bold font-weight-black" >{{ get.ename }}</span> <br>
                                            <span class="">
                                                <span>{{ get.editorData.slice(0, 15) }}</span><br>
                                                <span>{{ get.adress}}</span>
                                            </span>
                                        </v-card-text>

                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn text color="primary" @click="goto(get)"  v-bind:to="'/eventdetail/'+get['.key']">
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
    </div>
</template>

<script>
import { db } from '@/firebase'

export default {
    name: 'allevents',
    components: {},
    data: () => ({
        filterDate: null,
        date: new Date().toISOString().substr(0, 10),
        menu1: false,
        keys: [
            'Date',
            'EventName',
            'Title',
        ],
        
        event: null,
        clicked: false,

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
          add_date: null,
          edit_date: null,
        },

    }),

    firestore() {
      return {
        gets: db.collection('events').where('status', '==', true).orderBy('date1')
      }
    },

    computed(){
      
    },

    methods:
    {
        game(para) {
          console.log(para)
          /*if(para === 'All') {
            this.gets = db.collection('events').where('status', '==', true).orderBy('date1');
          }

          db.collection("events").where("ecato", "==", para).onSnapshot( (querySnapshot) => {
            this.gets = [];
            querySnapshot.forEach( (doc) => {
              
              this.gets.push(doc.data());
              console.log(doc.data().id+ ' '+doc.data())
            });
            console.log(this.gets);
         });*/
        },
        to() {
            this.$router.push('/allevents')
        },

        goto(get) {
            //this.$router.push('/eventdetail')
            console.log(get['.key'])
        },
        
    }
}
</script>

<style scoped>

</style>