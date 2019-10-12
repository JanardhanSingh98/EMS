<template>
    <div class="allevents">
        <div class="ma-2">
            <v-row class="text-center ma-3">
                <v-content 
                class="d-flex pa-2 text-center"
                >
                    <v-btn class="ma-2" outlined color="indigo">All</v-btn>
                    <v-btn class="ma-2" outlined color="indigo" >Adventure</v-btn>
                    <v-btn class="ma-2" outlined color="indigo">Creative</v-btn>
                    <v-btn class="ma-2" outlined color="indigo">Entertainment</v-btn>
                    <v-btn class="ma-2" outlined color="indigo">Startups</v-btn>
                    <v-btn class="ma-2" outlined color="indigo" >Gaming </v-btn>
                    <v-btn class="ma-2" outlined color="indigo">Technical</v-btn>
                    <v-btn class="ma-2" outlined color="indigo">Sports</v-btn>
                </v-content>
            </v-row>
        </div>

        <div class="ma-2">
            <v-row class="text-center ma-3">
                <v-content 
                class="d-flex pa-2 text-center">
                    <v-btn class="ma-2" outlined color="indigo" >All</v-btn>
                    <v-btn class="ma-2" outlined color="indigo">Today</v-btn>
                    <v-btn class="ma-2" outlined color="indigo">Tomorrow</v-btn>
                    <v-btn class="ma-2" outlined color="indigo">Weekend</v-btn>
                </v-content>
            </v-row>
        </div>

        <v-row class="justify-center ma-3" >
            <v-content
            v-for="project in projects"
            :key="project"
            class="pa-3 " >
                <v-hover v-slot:default="{ hover }">
                    <v-card
                    class="mx-auto "
                    max-width="400"
                    :elevation="hover ? 20 : 8"
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
                                @click="next"
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
  components: {
    
  },
  data() {
        return {
            projects: [
                { ids: '5', cate: 'Technical', title: 'Top 10 Australian beaches', date: 'November 10', name: 'Whitehaven Beach', place: 'Whitsunday Island, Whitsunday Islands', sorce: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'},
                { ids: '5', cate: 'Sports', title: 'Top 10 Australian beaches', date: 'November 21', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
                { ids: '1', cate: 'Music', title: 'Top 10 Australian beaches', date: 'December 22', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
                { ids: '2', cate: 'Creative', title: 'Top 10 Australian beaches', date: 'November 20', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
                { ids: '5', cate: 'Sports', title: 'Top 10 Australian beaches', date: 'November 25', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
                { ids: '1', cate: 'Music', title: 'Top 10 Australian beaches', date: 'November 22', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
                { ids: '1', cate: 'Adventure', title: 'Top 10 Australian beaches', date: 'November 12', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
                { ids: '5', cate: 'Sports', title: 'Top 10 Australian beaches', date: 'December 23', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
                { ids: '1', cate: 'Music', title: 'Top 10 Australian beaches', date: 'November 17', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
                { ids: '1', cate: 'Adventure', title: 'Top 10 Australian beaches', date: 'November 20', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
                { ids: '5', cate: 'Sports', title: 'Top 10 Australian beaches', date: 'November 20', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
                { ids: '1', cate: 'Music', title: 'Top 10 Australian beaches', date: 'November 20', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
                { ids: '2', cate: 'Creative', title: 'Top 10 Australian beaches', date: 'November 20', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
                { ids: '5', cate: 'Sports', title: 'Top 10 Australian beaches', date: 'November 20', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
                { ids: '1', cate: 'Music', title: 'Top 10 Australian beaches', date: 'November 20', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
                { ids: '2', cate: 'Creative', title: 'Top 10 Australian beaches', date: 'November 20', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
            ]
        }
    },
}
</script>