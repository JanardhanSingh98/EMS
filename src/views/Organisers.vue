<template>
  <div class="Team">
    <h1 class="subheading black--text text-center">Organizations</h1>

    <v-container class="my-5">

      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person">
          <v-card height="410" class="text-xs-center ma-3">
            <v-responsive class="mx-auto">
              <v-img  height="270" width="auto" align="center" justify="center" :src="person.pic"></v-img>

            </v-responsive>
            
            <v-card-text >
              <div class="headline font-weight-bold">{{ person.name }}</div>
              <div class="black--text ">{{ person.about }}</div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: 'Adventure', about: 'You can join us for free and enjoy the exciting events that will be conducted now and then.',pic: 'https://picsum.photos/510/300?random4.jpg' },
        { name: 'Creative', about: 'The purpose of the creative club is to stimulate interest in creative ideas among students, like Poster making, Tattoo making, Ad Mad show, Skits. ' ,pic: 'https://picsum.photos/510/300?rando5.jpg' },
        { name: 'Entertainment', about: 'You can join us to participate and showcase your skills in drama, Natak etc. ' , pic: 'https://picsum.photos/510/300?random' },
        { name: 'Startup',about: 'Join us to understand, create and explore buisness ideas, learning marketing skills.' , pic: 'https://picsum.photos/510/300?random1.jpg' },
        { name: 'Gaming',about: 'Join us to participate in various gaming competitions. Get to be part of various game launches.' , pic: 'https://picsum.photos/510/300?random7.jpg' },
        { name: 'Technical', about: 'One stop for geek in you. Be a part of prestigious tech company organizations.' ,pic: 'https://picsum.photos/510/300?random4.jpg' },
        { name: 'Sports', about: 'Join us and be a part our energetic club. Participate in state and national level events.' ,pic: 'https://picsum.photos/510/300?rando5.jpg' },
        { name: 'Literature',about: 'If you like the world of books and wish to live in a group of people with same mindsets. Then this place is for yous.' , pic: 'https://picsum.photos/510/300?random' },
        
      ]
    }
  }
}

</script>




