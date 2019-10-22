<template>
    <div class="allevents ">
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

        <div class="ma-2">
            <v-row class="ma-3" >
                <v-col cols="40" sm="6" md="2"  class="">
                    <v-menu
                    v-model="menu2"
                    :close-on-content-click="true"
                    :nudge-right="30"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                    >
                    <template v-slot:activator="{ on }">
                        <v-text-field
                        v-model="date"
                        label="Date"
                        prepend-icon="event"
                        readonly
                        v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" @input="menu2 = false"
                    
                    ></v-date-picker>
                    </v-menu>
                </v-col>
            </v-row>
        </div>

        <v-row class="justify-center ma-2" >
            <v-content
            v-for="project in filteredProjects"
            :key="project"
            class="pa-3" 
            
            >
                <v-hover v-slot:default="{ hover }">
                    <v-card
                    class="ma-auto "
                    max-width="400"
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
                                >
                                    {{project.cate}}
                                </v-chip>
                            </div>
                            <v-card-title class="align-center fill-height" >{{ project.title }}</v-card-title>
                        </v-img>

                        <v-card-text>
                            <span>{{ project.date }}</span><br>
                            <span class="text--primary">
                                <span>{{ project.name }}</span><br>
                                <span>{{ project.place}}</span>
                            </span>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn
                                text
                                color="orange"
                            >
                                Share
                            </v-btn>
                            <v-btn
                                text
                                color="orange"
                            >
                                Explore
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-hover>
            </v-content>
        </v-row>
    </div>
</template>

<script>

export default {
    name: 'allevents',
    components: {},
    data: () => ({
        date: new Date().toISOString().substr(0, 10),
        menu2: false,
        projects: [
            { cate: 'Technical', title: 'Top 10 Australian beaches', date: '2019-10-25', name: 'Whitehaven Beach', place: 'Whitsunday Island, Whitsunday Islands', sorce: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'},
            { cate: 'Sports', title: 'Top 10 Australian beaches', date: '2019-11-5', name: 'Whitehaven Beach', place: 'Block 14, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
            { cate: 'Music', title: 'Top 10 Australian beaches', date: '2020-01-7', name: 'Whitehaven Beach', place: 'Block 14, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
            { cate: 'Creative', title: 'Top 10 Australian beaches', date: '2019-11-3', name: 'Whitehaven Beach', place: 'Block 14, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
            { cate: 'Sports', title: 'Top 10 Australian beaches', date: '2019-10-20', name: 'Whitehaven Beach', place: 'Block 14, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
            { cate: 'Music', title: 'Top 10 Australian beaches', date: '2019-11-5', name: 'Whitehaven Beach', place: 'Block 14, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
            { cate: 'Adventure', title: 'Top 10 Australian beaches', date: '2019-12-14', name: 'Whitehaven Beach', place: 'Block 14, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
            { cate: 'Sports', title: 'Top 10 Australian beaches', date: '2020-03-12', name: 'Whitehaven Beach', place: 'Block 14, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
            { cate: 'Music', title: 'Top 10 Australian beaches', date: '2019-11-9', name: 'Whitehaven Beach', place: 'Block 14, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
            { cate: 'Adventure', title: 'Top 10 Australian beaches', date: '2019-10-26', name: 'Whitehaven Beach', place: 'Block 14, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
            { cate: 'Sports', title: 'Top 10 Australian beaches', date: '2019-09-21', name: 'Whitehaven Beach', place: 'Block 14, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
            { cate: 'Music', title: 'Top 10 Australian beaches', date: '2019-08-15', name: 'Whitehaven Beach', place: 'Block 14, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
            { cate: 'Creative', title: 'Top 10 Australian beaches', date: '2019-11-11', name: 'Whitehaven Beach', place: 'Block 14, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
            { cate: 'Sports', title: 'Top 10 Australian beaches', date: '2019-11-17', name: 'Whitehaven Beach', place: 'Block 14, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
            { cate: 'Music', title: 'Top 10 Australian beaches', date: '2019-12-04', name: 'Whitehaven Beach', place: 'Block 14, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
            { cate: 'Creative', title: 'Top 10 Australian beaches', date: '2020-05-05', name: 'Whitehaven Beach', place: 'Block 14, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
        ],
        event: null,
        clicked: false
    }),

    computed:
    {
        filteredProjects()
        {
            if(this.event != null && this.event.target.innerText.toLowerCase() != 'all')
            {
                return this.projects.filter(({cate})=>cate.toLowerCase() == this.event.target.innerText.toLowerCase());
            }
            else 
            { 
                return this.projects;
            }
        }
    },
    methods:
    {
        filter(event)
        {
            this.event = event;
        }
    }

}
</script>

<style scoped>

</style>