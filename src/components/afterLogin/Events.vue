<template>
  <v-card elevation="0" >
    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      left
    >
      <v-tab>Create Event</v-tab>
        <v-tab-item>
          <v-container>
            <v-layout row wrap>
              <v-flex xs12>
                <br>
                <span class="font-weight-bold display-2 ma-4">Create Event</span><br><br><br>
                
                <v-container >
                  <span class="font-weight-medium ">Basic Details</span>
                  <v-divider ></v-divider><br>
                  <v-row>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field outlined label="Event name"></v-text-field>
                    </v-col>
                    <v-col>
                      <v-select
                        :items="keys"
                        label="Event Category"
                        outlined
                      ></v-select>
                    </v-col>
                  </v-row>

                  <v-row>
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
                  </v-row>
                  
                  <!--Date picker -->

                  <span class="font-weight-medium ">Date(s)</span>
                  <v-divider ></v-divider><br>
                  <v-row>
                    <v-col>
                      <v-menu
                        v-model="menu1"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        full-width
                        max-width="290px"
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                          v-model="date1"
                          label="Start Date"
                          hint="MMM-DD-YYYY format"
                          clearable
                          persistent-hint
                          append-icon="event"
                          readonly
                          outlined
                          v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="date1" 
                          @input="menu1 = false"
                        ></v-date-picker>
                      </v-menu>
                    </v-col>

                    <v-col>
                      <v-menu
                        v-model="menu2"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        full-width
                        max-width="290px"
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                          v-model="date2"
                          label="Start Date"
                          hint="MMM-DD-YYYY format"
                          clearable
                          persistent-hint
                          append-icon="event"
                          readonly
                          outlined
                          v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="date2" 
                          @input="menu2 = false"
                        ></v-date-picker>
                      </v-menu>
                    </v-col>
                  </v-row><br>


                  <span class="font-weight-medium ">Event Description</span>
                  <v-divider ></v-divider><br>
                  <v-row>
                    <v-col>
                      <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
                 
                    </v-col>
                  </v-row><br>

                  <span class="font-weight-medium ">Organiser details</span>
                  <v-divider ></v-divider><br>
                  <v-row>
                    <v-col>
                      <v-text-field outlined label="Organiser name"></v-text-field>
                    </v-col>
                    <v-col>
                      <v-text-field outlined label="Phone number"></v-text-field>
                    </v-col>
                    <v-col>
                      <v-text-field outlined label="email"></v-text-field>
                    </v-col>
                  </v-row><br>

                  <span class="font-weight-medium ">Venue</span>
                  <v-divider ></v-divider><br>
                  <v-row>
                    <v-col>
                      <v-text-field outlined label="Address"></v-text-field>
                    </v-col>
                  </v-row>

                  <v-btn
                    class="ma-2"
                    :loading="loading4"
                    :disabled="loading4"
                    color="info"
                    @click="submit"
                  >
                    Submit
                    <template v-slot:loader>
                      <span class="custom-loader">
                        <v-icon light>cached</v-icon>
                      </span>
                    </template>
                  </v-btn>
                </v-container>
              </v-flex>
            </v-layout>
          </v-container>
        </v-tab-item>
      

      <v-tab>Draft Event</v-tab>
        <v-tab-item >
          
        </v-tab-item>
    
      <v-tab>Live Event</v-tab>
      <v-tab-item>
        comming soon
      </v-tab-item>

      <v-tab>Upcoming Events</v-tab>
      <v-tab-item>
        comming soon
      </v-tab-item>


    </v-tabs>    
  </v-card>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

  export default {
    data: () => ({
      date: new Date().toISOString().substr(0, 10),
      clicked: false,
      menu1: false,
      menu2: false,
      tab: null,
      dialog: false,
      files: [],
      keys: [
          'Entertainment',
          'Technical',
          'Game',
      ],
      editor: ClassicEditor,
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
          // The configuration of the editor.
      },
      loader: null,
      loading4: false,
    }),

    computed: {
      
    },

    watch: {
      
    },

    methods: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
      submit () {
        this.$router.push('/allevents')
      }
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