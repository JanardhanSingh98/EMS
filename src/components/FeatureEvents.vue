<template>
    <div class="ma-2">
        <div class="mx-5 justify-center"> 
            <v-content class="mx-2">
                <h2>Featured Events</h2>
            </v-content>
        </div>
        <v-row class="justify-center ma-3" >
            <div
            v-for="project in projects"
            :key="project.title"
            class="ma-3 " >
                <v-card
                
                class="mx-auto"
                max-width="400"
                
            >
                <v-img
                class="white--text"
                height="200px"
                src='https://cdn.vuetifyjs.com/images/cards/docks.jpg'
                >
                <v-card-title class="align-end fill-height">{{ project.title }}</v-card-title>
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
            </div>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {title: 'Top 10 Australian beaches', date: 'Number 10', name: 'Whitehaven Beach', place: 'Whitsunday Island, Whitsunday Islands', sorce: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'},
                {title: 'Top 10 Australian beaches', date: 'Number 20', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'},
                {title: 'Top 10 Australian beaches', date: 'Number 20', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'},
                {title: 'Top 10 Australian beaches', date: 'Number 20', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'},
            ]
        }
    }
}
</script>