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
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="">
                    <v-text-field v-model="editedItem.name" label="Event name"></v-text-field>
                    <v-text-field v-model="editedItem.category" label="Event Category"></v-text-field>
                    <v-text-field v-model="editedItem.Date" label="Event Date"></v-text-field>
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
    </template>
  </v-data-table>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
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