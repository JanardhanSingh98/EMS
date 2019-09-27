<template>
    <div class="allevents">
        <v-row class="justify-center ma-3" >
            <div
            v-for="project in projects"
            :key="project.title"
            class="ma-3 " >
                <v-card
                class="mx-auto elevation-10"
                max-width="400"
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
            </div>
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
                {cate: 'Technical', title: 'Top 10 Australian beaches', date: 'Number 10', name: 'Whitehaven Beach', place: 'Whitsunday Island, Whitsunday Islands', sorce: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'},
                {cate: 'Sports', title: 'Top 10 Australian beaches', date: 'Number 20', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
                {cate: 'Music', title: 'Top 10 Australian beaches', date: 'Number 20', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
                {cate: 'Creative', title: 'Top 10 Australian beaches', date: 'Number 20', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
                {cate: 'Sports', title: 'Top 10 Australian beaches', date: 'Number 20', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
                {cate: 'Music', title: 'Top 10 Australian beaches', date: 'Number 20', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
                {cate: 'Creative', title: 'Top 10 Australian beaches', date: 'Number 20', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
                {cate: 'Sports', title: 'Top 10 Australian beaches', date: 'Number 20', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
                {cate: 'Music', title: 'Top 10 Australian beaches', date: 'Number 20', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
                {cate: 'Creative', title: 'Top 10 Australian beaches', date: 'Number 20', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
                {cate: 'Sports', title: 'Top 10 Australian beaches', date: 'Number 20', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
                {cate: 'Music', title: 'Top 10 Australian beaches', date: 'Number 20', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
                {cate: 'Creative', title: 'Top 10 Australian beaches', date: 'Number 20', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
                {cate: 'Sports', title: 'Top 10 Australian beaches', date: 'Number 20', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
                {cate: 'Music', title: 'Top 10 Australian beaches', date: 'Number 20', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
                {cate: 'Creative', title: 'Top 10 Australian beaches', date: 'Number 20', name: 'Whitehaven Beach', place: 'Block 15, Near Tuck Shop', sorce: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
            ]
        }
    },
}
</script>