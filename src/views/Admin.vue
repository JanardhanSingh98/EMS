<!--<template>
  <div>
    <v-data-table :headers="headers" :items="events" :items-per-page="10" class="elevation-1"></v-data-table>

    <v-btn class="primary" @click="getdate">date</v-btn>
  </div>
</template>-->

<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Categories</th>
              <th class="text-left">Date</th>
              <th class="text-left">Organizer</th>
              <th class="text-left">Contact</th>
              <th class="text-left">Status</th>
              <th class="text-left">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(event, i) in events" :key="i">
              <td>{{ event.ename }}</td>
              <td>{{ event.ecato }}</td>
              <td>{{ event.date1 }} - {{ event.date2 }}</td>
              <td>{{ event.oname }}</td>
              <td>{{ event.ophone }}</td>
              <td><v-chip :class="`${event.status} white--text`">{{ event.status }}</v-chip></td>
              <td><v-btn text outlined v-bind:disabled="event.status === true" @click="approve(event)">Approve</v-btn></td>
            </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-snackbar v-model="snackbar" :timeout="timeout" top>
      {{ text }}
      <v-btn color="white" text @click="snackbar = false" icon>X</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { db } from '@/firebase'
  export default {
    data () {
      return {
        snackbar: false,
        timeout: null,
        text: '',
        /*headers: [
          {
            text: 'Name',
            align: 'left',
            //sortable: false,
            value: 'ename',
          },
          { text: 'Category', value: 'ecato' },
          { text: 'Date', value: 'date1' },
          { text: 'Club', value: 'oname' },
          { text: 'Phone', value: 'ophone' },
          { text: 'Status', value: 'status' },
        ],*/

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
          add_date: null,
          edit_date: null,
        },
      }
    },
    firestore() {
      return{
        events: db.collection('events')
      }
    },
    methods: {
      getdate() {
        var d = new Date();
        alert(d)
        var currentDateWithFormat = new Date().toJSON().slice(0,10).replace(/-/g,'-');
        console.log(currentDateWithFormat);
      },
      approve(event) {
        this.$firestore.events.doc(event['.key']).update({ status: true })
        .then( () => {
          this.snackbar = true
          this.timeout = 3000
          this.text = 'Event approved'
          console.log(this.text)
        })
      }
    }
  }
</script>

<style scoped>
.v-chip.true {
  background: green;
}
.v-chip.false {
  background: red;
}
</style>