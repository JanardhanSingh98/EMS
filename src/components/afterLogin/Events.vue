<template>
  <v-card elevation="0" >
    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      left
    >
    <!--CREATE EVENT-->
      <v-tab>Create Event</v-tab>
        <v-tab-item>
          <v-container>
            <v-layout row wrap>
              <v-flex xs12>
                <br>
                <span class="font-weight-bold display-2 ma-4">Create Event</span><br><br><br>
                
                <v-container >
                  <v-form ref="addevent"> 
                  <span class="font-weight-medium ">Basic Details</span>
                  <v-divider ></v-divider><br>
                  <v-row>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field outlined v-model="event.ename" required label="Event name"></v-text-field>
                    </v-col>
                    <v-col>
                      <v-select :items="keys" v-model="event.ecato" label="Event Category" outlined></v-select>
                    </v-col>
                  </v-row>

                  <!--<v-row>
                    <v-col>
                      <v-file-input
                        v-model="files"
                        color="primary accent-4"
                        counter
                        label="File input"
                        
                        placeholder="Select your files"
                        append-icon="mdi-camera"
                        append-outer-icon
                        outlined
                        :show-size="1000"
                      >
                        <template v-slot:selection="{ index, text }">
                          <v-chip
                            v-if="index < 2"
                            color="primary accent-4"
                            dark
                            label
                            small
                          >
                            {{ text }}
                          </v-chip>

                          <span
                            v-else-if="index === 2"
                            class="overline primary--text text--darken-3 mx-2"
                          >
                            +{{ files.length - 2 }} File(s)
                          </span>
                        </template>
                      </v-file-input>
                    </v-col>
                  </v-row>-->
                  
                  <!--Date picker -->

                  <span class="font-weight-medium ">Date(s)</span>
                  <v-divider ></v-divider><br>
                  <v-row>
                    <v-col>
                      <v-menu v-model="menu1" :close-on-content-click="false" transition="scale-transition"                       offset-y
                        full-width max-width="290px" min-width="290px">
                        <template v-slot:activator="{ on }">
                          <v-text-field v-model="event.date1" label="Start Date" hint="MMM-DD-YYYY format" clearable persistent-hint append-icon="event"
                          readonly outlined v-on="on"></v-text-field>
                        </template>
                        <v-date-picker :disable-dates="allowedDates" v-model="event.date1" @input="menu1 = false"></v-date-picker>
                      </v-menu>
                    </v-col>

                    <v-col>
                      <v-menu v-model="menu2" :close-on-content-click="false" transition="scale-transition" offset-y full-width max-width="290px"
                        min-width="290px">
                        <template v-slot:activator="{ on }">
                          <v-text-field v-model="event.date2" label="End Date" hint="MMM-DD-YYYY format" clearable persistent-hint append-icon="event"
                          readonly outlined v-on="on"></v-text-field>
                        </template>
                        <v-date-picker v-model="event.date2" @input="menu2 = false"></v-date-picker>
                      </v-menu>
                    </v-col>
                  </v-row><br>


                  <span class="font-weight-medium ">Event Description</span>
                  <v-divider ></v-divider><br>
                  <v-row>
                    <v-col>
                      <!--<v-textarea v-model="event.editorData" label="Event Description" outlined></v-textarea>-->

                      <ckeditor :editor="editor" v-model="event.editorData" :config="editorConfig"></ckeditor>            
                    </v-col>
                  </v-row><br>

                  <span class="font-weight-medium ">Organiser details</span>
                  <v-divider ></v-divider><br>
                  <v-row>
                    <v-col>
                      <v-text-field outlined v-model="event.oname" label="Organiser name"></v-text-field>
                    </v-col>
                    <v-col>
                      <v-text-field outlined v-model="event.ophone" type="number" label="Phone number"></v-text-field>
                    </v-col>
                    <v-col>
                      <v-text-field outlined v-model="event.oemail" type="email" label="email"></v-text-field>
                    </v-col>
                  </v-row><br>

                  <span class="font-weight-medium ">Venue</span>
                  <v-divider ></v-divider><br>
                  <v-row>
                    <v-col>
                      <v-text-field v-model="event.adress" outlined label="Address"></v-text-field>
                    </v-col>
                  </v-row>

                  <v-btn class="ma-2" :loading="loading4" :disabled="loading4" color="info" @click="submit">
                    Submit
                    <template v-slot:loader>
                      <span class="custom-loader">
                        <v-icon light>cached</v-icon>
                      </span>
                    </template>
                  </v-btn>

                  </v-form>
                </v-container>
              </v-flex>
            </v-layout>
          </v-container>
        </v-tab-item>

    <!--DRAFT EVENT--> 
      <v-tab>Draft Event</v-tab>
      <v-tab-item >
        <v-container class="grey lighten-2 ma-0 pa-0 mx-auto mt-1" v-for="(event, i) in events" :key="i">
          <v-row no-gutters v-if="event.date1 < currentDate">
            <v-col cols="12" sm="9" md="9" xs="12">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">{{event.ename}}</v-list-item-title>
                  <v-list-item-subtitle>{{event.editorData}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col sm="3" md="3" xs="3" style="border-left: 2px solid red;">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class=""><v-chip  class="success my-1" small>ongoing</v-chip></v-list-item-title>
                  <v-list-item-subtitle class="text-left">
                    <v-chip  class="primary my-1"><v-icon left color="white">mdi-account</v-icon>{{event.ecato}}</v-chip><br>
                    <v-btn flat outlined v-bind:to="'/eventdetail/'+event['.key']">explore</v-btn>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    
    <!--LIVE EVENT-->
      <v-tab>Live Event</v-tab>
      <v-tab-item>
        <v-container class="grey lighten-2 ma-0 pa-0 mx-auto mt-1" v-for="(event, i) in events" :key="i">
          <v-row no-gutters v-if="event.date1 === currentDate">
            <v-col cols="12" sm="9" md="9" xs="12">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">{{event.ename}}</v-list-item-title>
                  <v-list-item-subtitle>{{event.editorData}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col sm="3" md="3" xs="3" style="border-left: 2px solid red;">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class=""><v-chip  class="success my-1" small>ongoing</v-chip></v-list-item-title>
                  <v-list-item-subtitle class="text-left">
                    <v-chip  class="primary my-1"><v-icon left color="white">mdi-account</v-icon>{{event.ecato}}</v-chip><br>
                    <v-btn flat outlined v-bind:to="'/eventdetail/'+event['.key']">explore</v-btn>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>

    <!--UPCOMING EVENT-->
      <v-tab>Upcoming Events</v-tab>
      <v-tab-item>
        <v-container class="grey lighten-2 ma-0 pa-0 mx-auto mt-1" v-for="(event, i) in events" :key="i">
          <v-row no-gutters v-if="event.date1 > currentDate">
            <v-col cols="12" sm="9" md="9" xs="12">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">{{event.ename}}</v-list-item-title>
                  <v-list-item-subtitle>{{event.editorData}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col sm="3" md="3" xs="3" style="border-left: 2px solid red;">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class=""><v-chip  class="success my-1" small>ongoing</v-chip></v-list-item-title>
                  <v-list-item-subtitle class="text-left">
                    <v-chip  class="primary my-1"><v-icon left color="white">mdi-{{a}}</v-icon>{{event.ecato}}</v-chip><br>
                    <v-btn flat outlined v-bind:to="'/eventdetail/'+event['.key']">explore</v-btn>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>


    </v-tabs>   


      <v-snackbar v-model="snackbar" top>
        {{ text }}
        <v-btn color="pink" text @click="snackbar = false">
          Close
        </v-btn>
      </v-snackbar> 


  </v-card>
</template>

<script>
import { db } from '@/firebase'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

  export default {
    data: () => ({
      allowedDates: {to: new Date(Date.now() - 2)},
      a: 'home',  //event.ecato.toLowerCase().trim()
      currentDate : new Date().toJSON().slice(0,10).replace(/-/g,'-'),
      events: [],
      event: {
        ename: null,
        ecato: null,
        date1: null,
        date2: null,
        editorData: null,
        oname: null, 
        ophone: null, 
        oemail: null,
        adress: null,
        status: false,
        add_date: new Date(),
        edit_date: new Date(),
      },
      snackbar: false,
      text: 'Event added successfully!',

      //date: new Date().toISOString().substr(0, 10),
      clicked: false,
      menu1: false,
      menu2: false,
      tab: null,
      dialog: false,
      files: [],
      keys: [
          'Adventure',
          'Creative',
          'Entertainment',
          'Gaming',
          'Sports',
          'Startups',
          'Technical',
      ],

      editor: ClassicEditor,
      
      editorConfig: {
          // The configuration of the editor.
      },
      loader: null,
      loading4: false,
    }),
    firestore() {
      return{
        events: db.collection('events')
      }
    },
    methods: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
      submit () {
        this.loading4 = true;
        //console.log(this.sent);

        this.$firestore.events.add(this.event).then( () => {
          this.loading4 = false
          this.snackbar = true
          console.log('data added successfully')
          this.$refs.addevent.reset()
          this.sent.editorData = ''
        }).catch( () => {
          console.log('something went wrong')
        })

        //this.$router.push('/allevents')
      },
      //allowedDates: val => new Date(Date.now() - 8640000)
          //to= new Date(Date.now() - 8640000)
          
    }
  }
</script>

<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>