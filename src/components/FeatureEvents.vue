<template>
    <v-container class="FeatureEvents" justify-center>
        <div class="ma-2"> 
            <v-content class="d-flex pa-2">
                <h2>Featured Events</h2>
            </v-content>
        </div>
        
        <v-container>
            <v-layout row wrap>
                <v-flex xs12 sm12>
                    <v-row class="justify-center ma-2" >
                        <v-content
                        v-for="(project, i) in projects"
                        :key="i"
                        class="pa-3" 
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
                                            @click="submit"
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
    </v-container>
</template>

<script>
export default {
    data: () => ({
        projects: [
            {cate: 'Technical', title: 'Top 10 Australian beaches', date: 'Number 10', name: 'Whitehaven Beach', place: 'Whitsunday Island, Whitsunday Islands', sorce: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'},
            {cate: 'Sports', title: 'Top 10 Australian beaches', date: 'Number 20', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
            {cate: 'Music', title: 'Top 10 Australian beaches', date: 'Number 20', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
            {cate: 'Creative', title: 'Top 10 Australian beaches', date: 'Number 20', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
        ]
    }),
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