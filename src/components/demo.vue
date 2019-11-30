<template>
            <v-data-table
                :headers="headers"
                :items="events"
                sort-by="none"
            >
                <template v-slot:top>
                <v-toolbar flat color="white">
                    <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on }">
                        <v-btn color="primary" dark class="mb-2" v-on="on">Create Event</v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                        <span class="headline " >{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                          <v-container>
                            <v-row>
                              <v-col cols="12" sm="6" md="">
                                <v-text-field outlined v-model="editedItem.name" label="Event name"></v-text-field>
                                <v-select
                                  v-model="editedItem.category"
                                  :items="keys"
                                  label="Event Category"
                                  outlined
                                ></v-select>
                                <v-text-field outlined v-model="editedItem.Date" label="Event Date"></v-text-field>

                                <v-menu
                                  ref="menu1"
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
                                    outlined
                                      v-model="dateFormatted"
                                      label="Event Start Date"
                                      hint="MM/DD/YYYY format"
                                      persistent-hint
                                      append-icon="event"
                                      @blur="date = parseDate(dateFormatted)"
                                      v-on="on"
                                    ></v-text-field>
                                  </template>
                                  <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
                                </v-menu>

                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card-text>

                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                        <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
                </v-toolbar>
                </template>
                <template v-slot:item.action="{ item }">
                <v-icon
                    small
                    class="mr-2"
                    @click="editItem(item)"
                    color="primary"
                >
                    edit
                </v-icon>
                <v-icon
                    small
                    @click="deleteItem(item)"
                    color="error"
                >
                    delete
                </v-icon>
                </template>
                <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">Reset</v-btn>
                <span>Empty</span>
                </template>
            </v-data-table>
        </template>


        <script>
  export default {
    data: () => ({
        tab: null,
        dialog: false,
        keys: [
            'Entertainment',
            'Technical',
            'Game',
        ],
        headers: [
            {
            text: 'Event Name',
            align: 'left',
            //sortable: false,
            value: 'name',
            },
            { text: 'Category', value: 'category' },
            { text: 'Date', value: 'Date' },
            { text: 'Actions', value: 'action', sortable: false },
        ],
        events: [],
        editedIndex: -1,
        editedItem: {
            name: '',
            category: '',
            Date: '',
        },
        defaultItem: {
            name: '',
            category: '',
            Date: '',
        },

        
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Create Event' : 'Edit Event'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.events = [

          {
            name: 'abc',
            category: 'Entertainment',
            Date: 'Nov 9th 2019',
          },
          {
            name: 'def',
            category: 'Technical',
            Date: 'Dec 5th 2019',
          },

        ]
      },

      editItem (item) {
        this.editedIndex = this.events.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.events.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.events.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.events[this.editedIndex], this.editedItem)
        } else {
          this.events.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>

<style>
/* Helper classes */
.basil {
  background-color: #FFFBE6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>