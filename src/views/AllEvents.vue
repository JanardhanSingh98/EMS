<template>
    <div class="allevents ">

        <v-container>
            <v-layout row wrap>
                <v-flex xs12 sm12>
                    <div class="ma-2">  
                        <v-text-field
                            v-model="search"
                            clearable
                            flat
                            outlined
                            solo
                            filled
                            dense
                            hide-details
                            prepend-inner-icon="search"
                            label="Search Events"
                        ></v-text-field>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>

        <div class="ma-2">
            <v-row class="text-center ma-3">
                <v-content 
                class="d-flex pa-2 text-center"
                >
                    <v-hover v-slot:default="{ hover }">
                    <v-btn @click="filter($event)" :elevation="hover ? 20 : 4" class="ma-2 active" outlined color="indigo">All</v-btn>
                    </v-hover>
                    <v-hover v-slot:default="{ hover }">
                    <v-btn @click="filter($event)" :elevation="hover ? 20 : 4" class="ma-2" outlined color="indigo">Adventure</v-btn>
                    </v-hover>
                    <v-hover v-slot:default="{ hover }">
                    <v-btn @click="filter($event)" :elevation="hover ? 20 : 4" class="ma-2" outlined color="indigo">Creative</v-btn>
                    </v-hover>
                    <v-hover v-slot:default="{ hover }">
                    <v-btn @click="filter($event)" :elevation="hover ? 20 : 4" class="ma-2" outlined color="indigo">Entertainment</v-btn>
                    </v-hover>
                    <v-hover v-slot:default="{ hover }">
                    <v-btn @click="filter($event)" :elevation="hover ? 20 : 4" class="ma-2" outlined color="indigo">Startups</v-btn>
                    </v-hover>
                    <v-hover v-slot:default="{ hover }">
                    <v-btn @click="filter($event)" :elevation="hover ? 20 : 4" class="ma-2" outlined color="indigo">Gaming </v-btn>
                    </v-hover>
                    <v-hover v-slot:default="{ hover }">
                    <v-btn @click="filter($event)" :elevation="hover ? 20 : 4" class="ma-2" outlined color="indigo">Technical</v-btn>
                    </v-hover>
                    <v-hover v-slot:default="{ hover }">
                    <v-btn @click="filter($event)" :elevation="hover ? 20 : 4" class="ma-2" outlined color="indigo">Sports</v-btn>
                    </v-hover>
                    <v-hover v-slot:default="{ hover }">
                    <v-btn @click="filter($event)" :elevation="hover ? 20 : 4" class="ma-2" outlined color="indigo">Music</v-btn>
                    </v-hover>
                </v-content>
            </v-row>
        </div>

        <v-container>
            <v-layout row wrap>
                <v-flex xs12 sm12>
                    <div class="ma-2" >
                        <v-row class="text-center ma-3">
                            <v-content 
                            class="d-flex pa-2 text-center">
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

        <v-container>
            <v-layout row wrap>
                <v-flex xs12 sm12>
                    <div class="ma-2">
                        <v-row class="ma-3" >
                            <v-col cols="4" lg="2" class="">
                                <v-menu
                                    v-model="menu1"
                                    :close-on-content-click="false"
                                    max-width="290"
                                    >
                                    <template v-slot:activator="{ on }">
                                        <v-text-field
                                        :value="computedDateFormattedMomentjs"
                                        clearable
                                        label="Filter By Date"
                                        readonly
                                        v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="date"
                                        @change="menu1 = false"
                                    ></v-date-picker>
                                    </v-menu>
                            </v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="4" lg="2">
                                <v-spacer></v-spacer>
                                <template >
                                    <v-spacer></v-spacer>
                                    <v-select
                                    v-model="sortBy"
                                    clearable
                                    flat
                                    hide-details
                                    :items="keys"
                                    prepend-inner-icon="search"
                                    label="Sort by"
                                    ></v-select>
                                    
                                </template>
                            </v-col>
                        </v-row>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>

        <v-container>
            <v-layout row wrap>
                <v-flex xs12 sm12>
                    <v-row class="justify-center ma-2" >
                        <v-content
                        v-for="(project, i) in filteredProjects"
                        :key="i"
                        class="pa-2" 
                        
                        >
                            <v-hover v-slot:default="{ hover }">
                                <v-card
                                class="ma-auto "
                                max-width="350"
                                
                                :elevation="hover ? 24 : 4"
                                >
                                    <v-img
                                    class="white--text"
                                    max-height="200px"
                                    :src="project.sorce"
                                    >
                                        <div align="right">
                                            <v-chip
                                            class="ma-2 text-uppercase font-weight-bold"
                                            color="primary"
                                            label
                                            @click="to"
                                            >
                                                {{project.cate}}
                                            </v-chip>
                                        </div>
                                    </v-img>

                                    <v-card-text>
                                        <span>{{ project.date }}</span><br>
                                        <span class="text--primary font-weight-bold font-weight-black" >{{ project.title }}</span> <br>
                                        <span class="text--primary">
                                            <span>{{ project.name }}</span><br>
                                            <span>{{ project.place}}</span>
                                        </span>
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="goto"
                                        >
                                            Explore
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-hover>
                        </v-content>
                    </v-row>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    name: 'allevents',
    components: {},
    data: () => ({
        date: new Date().toISOString().substr(0, 10),
        menu1: false,
        keys: [
            'Date',
            'EventName',
            'Title',
        ],
        projects: [
            { 
                cate: 'Technical', 
                title: 'How to Master Competitive Programming?', 
                date: 'Oct-25-2019', 
                name: 'Whitehaven Beach', 
                place: 'BHAU Institute, Shivajinagar, Pune', 
                sorce: 'https://firebasestorage.googleapis.com/v0/b/eventbeep-production.appspot.com/o/WhatsApp%20Image%202019-08-17%20at%2017.18.15.jpeg?alt=media&token=1eb08d7f-f8d1-412a-85c6-38ba6f457f86'
            },
            { 
                cate: 'Sports', 
                title: 'Top 10 Australian beaches', 
                date: 'Nov-05-2019', 
                name: 'Whitehaven Beach', 
                place: 'Block 14, Near Tuck Shop', 
                sorce: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'
            },
            { 
                cate: 'Music', 
                title: 'Top 10 Australian beaches', 
                date: 'Jan-01-2020', 
                name: 'Whitehaven Beach', 
                place: 'Block 14, Near Tuck Shop', 
                sorce: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'
            },
            { 
                cate: 'Creative', 
                title: 'Top 10 Australian beaches', 
                date: 'Nov-03-2019', 
                name: 'Whitehaven Beach', 
                place: 'Block 14, Near Tuck Shop', 
                sorce: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'
            },
            { 
                cate: 'Adventure', 
                title: 'Top 10 Australian beaches', 
                date: 'Dec-14-2019', 
                name: 'Whitehaven Beach', 
                place: 'Block 14, Near Tuck Shop', 
                sorce: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'
            },
        ],
        event: null,
        clicked: false
    }),

    computed:
    {
        filteredProjects() //Filter fun for filter the data
        {
            if(this.event != null && this.event.target.innerText.toLowerCase() != 'all')
            {
                return this.projects.filter(({cate})=>cate.toLowerCase() == this.event.target.innerText.toLowerCase());
            }
            else 
            { 
                return this.projects;
            }
        },
        computedDateFormattedMomentjs () {
            return this.date ? moment(this.date).format('MMM-DD-YYYY') : ''
        },
    },
    methods:
    {
        filter(event) //Filter Method
        {
            this.event = event;
        },
        goto() {
            this.$router.push('/eventdetail')
        },
        
    }
}
</script>

<style scoped>

</style>