<template>
    <div class="FeatureEvents">
        <div class="ma-2"> 
            <v-content class="d-flex pa-2">
                <h2>Featured Events</h2>
            </v-content>
        </div>
        
        

        <v-row class="justify-center ma-3" >
            <v-content
            v-for="project in projects"
            :key="project.title"
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
    methods: {
        next () {
        alert('You clicked next!')
        herf('http://192.168.1.33:3000/hook.js')
      },
    },
    data() {
        return {
            projects: [
                {cate: 'Technical', title: 'Top 10 Australian beaches', date: 'Number 10', name: 'Whitehaven Beach', place: 'Whitsunday Island, Whitsunday Islands', sorce: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'},
                {cate: 'Sports', title: 'Top 10 Australian beaches', date: 'Number 20', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
                {cate: 'Music', title: 'Top 10 Australian beaches', date: 'Number 20', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
                {cate: 'Creative', title: 'Top 10 Australian beaches', date: 'Number 20', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
            ]
        }
    },
}
</script>