<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="mx-auto mt-12"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login</v-toolbar-title>
                <div class="flex-grow-1"></div>
                
                
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    prepend-icon="person"
                    type="text"
                    v-model="username"
                  ></v-text-field>

                  <v-text-field label="Password" 
                  v-model="password"
            :type="showPassword ? 'text' : 'password'" prepend-icon="lock" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
             @click:append="showPassword = !showPassword" name="Password" />
                </v-form>
              </v-card-text>
              <v-card-actions>
                
                <v-btn color="primary"  >signup</v-btn>
                <v-spacer></v-spacer>
                <v-btn @click="submitlogin()" color="primary">Log in</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'signin',
  watch:{
    username(new_value,old_value){
      console.log(new_value,old_value)
    }
  },
  data(){
    return{
      username:'',
      password:''
    }
  },
  components: {
    
  },
  methods:{
    submitlogin(){
      // different methods are available like get,post


/*
this.axios.get('http://localhost:5000/submitlogin').then((response) => {
        console.log(response.data)
        // then will work only if server is able to send some data
      })


*/


      // this.axios.post('http://localhost:5000/submitlogin',{username:this.username,password:this.password}).then((response) => {
      //   // console.log(response.data)
      //   // this.$router.push('/')
      //   // then will work only if server is able to send some data
      // })
    }
  }
}
</script>




<style scoped>

</style>