<template>
   <v-bottom-navigation :value="activeBtn" color="blue accent-2" class="d-flex d-sm-none" vertical fixed>
       <v-btn icon v-for="(bottom, i) in bottoms" :key="i" link :to="bottom.route" >
           
           <span>{{ bottom.title }}</span>
           <v-icon medium>{{ bottom.icon }}</v-icon>
       </v-btn>
    </v-bottom-navigation>     
</template>

<script>
export default {
    
    data () {
        return {
            activeBtn: 1,
            bottoms: [
                { icon: 'mdi-home', title: 'Home',  route: '/' },
                { icon: 'mdi-eventbrite', title: 'All Events', route: '/allevents'},
                { icon: 'question_answer', title: 'About', route: '/about' },
                { icon: 'mdi-login', title: 'SignIn', route: '/signin' },
                
            ]
        }
    }
};
</script>