<template>
  <div class="Team">
    <h1 class="subheading grey--text">Who We Are</h1>

    <v-container class="my-5">

      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person">
          <v-card  class="text-xs-center ma-3">
            <v-responsive class="mx-auto">
              <v-img style="border-radius:50%; margin: auto; margin-top: 20px;" height="250" width="250" align="center" justify="center" :src="person.pic"></v-img>

            </v-responsive>
            
            <v-card-text>
              <div class="headline">{{ person.name }}</div>
              <div class="subheadline">{{ person.role }}</div>
              <div class="grey--text">{{ person.about }}</div>
            </v-card-text>
            
            <v-btn icon text outlined class="ma-2"  link :to="person.link">
              <v-icon color="blue lightn-2">mdi-linkedin-box</v-icon>
            </v-btn>
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
        { name: 'deadR00T', role: 'Web developer',about: 'Boss Man. Serial Entrepreneur. Enthusiastic Reader. Live Music Fan: Grateful Dead, Bruce Springsteen, Peter Gabriel.' ,pic: 'https://picsum.photos/510/300?random4.jpg', link: 'google.com' },
        { name: 'Hastar', role: 'Graphic designer',about: 'Boss Man. Serial Entrepreneur. Enthusiastic Reader. Live Music Fan: Grateful Dead, Bruce Springsteen, Peter Gabriel.' ,pic: 'https://picsum.photos/510/300?rando5.jpg', link: 'facebook.com' },
        { name: 'Pratik', role: 'Web developer',about: 'Boss Man. Serial Entrepreneur. Enthusiastic Reader. Live Music Fan: Grateful Dead, Bruce Springsteen, Peter Gabriel.' , pic: 'https://picsum.photos/510/300?random', link: 'xxx.com' },
        { name: 'AK', role: 'Social media maverick',about: 'Boss Man. Serial Entrepreneur. Enthusiastic Reader. Live Music Fan: Grateful Dead, Bruce Springsteen, Peter Gabriel.' , pic: 'https://picsum.photos/510/300?random1.jpg', link: 'google.com' },
        { name: 'Vikash', role: 'Web developer',about: 'Boss Man. Serial Entrepreneur. Enthusiastic Reader. Live Music Fan: Grateful Dead, Bruce Springsteen, Peter Gabriel.' , pic: 'https://picsum.photos/510/300?random7.jpg', link: 'google.com' }
        
      ]
    }
  }
}
</script>




