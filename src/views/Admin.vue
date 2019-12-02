<!--<template>
  <div>
    <v-data-table :headers="headers" :items="events" :items-per-page="10" class="elevation-1"></v-data-table>

    <v-btn class="primary" @click="getdate">date</v-btn>
  </div>
</template>-->

<template>
  <div>
    <v-simple-table v-show="admindata">
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
              <td>
                <v-btn text outlined v-bind:disabled="event.status === true" @click="approve(event)">Approve</v-btn>
                <v-btn text outlined v-bind:disabled="event.status === false" @click="disapprove(event)">dispprove</v-btn>
                <v-btn icon outlined v-bind:disabled="event.status === true" @click="deleteevent(event)" class="mr-2">
                  <v-icon color='warning'>mdi-delete</v-icon>
                </v-btn>
              </td>
            </tr>
        </tbody>
      </template>
    </v-simple-table>


    <v-dialog max-width="500" class="mx-auto grey text-center" v-model="adminForm">
        <div class="form">
          <md-field>
            <label>Admin Email</label>
            <md-input v-model="adminemail" autofocus></md-input>
          </md-field>

          <md-field md-has-password>
            <label>Admin Password</label>
            <md-input v-model="adminpassword" type="password"></md-input>
          </md-field>
        </div>

        <div class="actions md-layout md-alignment-center-space-between">
          <!--<a>Reset password</a>-->
          <md-button class="md-raised md-primary" @click="adminlogin">Log in</md-button>
        </div>
    </v-dialog>

    <!--<v-btn @click="getadmin">user</v-btn>-->

    <div justify="center" align="center" class="my-2">
      <v-btn @click="log" v-if="admin !== ''" width="250" color="primary">logout</v-btn>
    </div>

  </div>
</template>

<script>
import { db, fb } from '@/firebase'
import Swal from 'sweetalert2'
  export default {
    data () {
      return {

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

        admindata: false,
        adminForm: false,
        adminemail: '',
        adminpassword: '',
        admin: '',
      }
    },
    firestore() {
      return{
        events: db.collection('events')
      }
    },

    created: function() {
      this.admin = fb.auth().currentUser;
      fb.auth().onAuthStateChanged( (user) => {
        if (user) {
          console.log(user)
          this.admindata = true;
        } else {
          console.log('error hai')
          this.admin = '';
          this.adminForm = true;
        }
      });
    },

    methods: {
      getdate() {
        var d = new Date();
        alert(d)
        var currentDateWithFormat = new Date().toJSON().slice(0,10).replace(/-/g,'-');
        console.log(currentDateWithFormat);
      },
      approve(event) {
        Swal.fire({
          title: 'Are you sure?',
          text: "Following event will be approved!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, approve it!'
        }).then((result) => {
          if (result.value) {
            this.$firestore.events.doc(event['.key']).update({ status: true });
            Swal.fire(
              'Approved!',
              'Following event has been approved.',
              'success'
            )
          }
        })
      },
      disapprove(event) {
        Swal.fire({
          title: 'Are you sure?',
          text: "Following event will be dis-approved!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, dis-approve it!'
        }).then((result) => {
          if (result.value) {
            this.$firestore.events.doc(event['.key']).update({ status: false });
            Swal.fire(
              'Dis-approved!',
              'Following event has been dis-approved.',
              'success'
            )
          }
        })
      },
      deleteevent(event) {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.value) {
            this.$firestore.events.doc(event['.key']).delete()
            Swal.fire(
              'Deleted!',
              'Your event has been deleted.',
              'success'
            )
          }
        })
      },
      adminlogin() {
        fb.auth().signInWithEmailAndPassword(this.adminemail, this.adminpassword).then( (user)=> {
          this.adminForm = false;
          this.admindata = true;
          this.admin = user;
          console.log(user);
          
        })
      },
      log() {
        fb.auth().signOut().then( () => {
          this.admindata = false;
          this.adminlogin = true;
          this.admin = '';
          console.log('logged out');
        })
      }

      /*getadmin() {
        console.log(fb.auth().currentUser);
        if(fb.auth().currentUser) {
          console.log('logged in');
          console.log(fb.auth().currentUser.email);
        } else {
          console.log('pleae login')
        }
      },*/
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