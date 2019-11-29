<template>
    <div class="centered-container">
    <md-content class="md-elevation-3">

      <div class="title">
        <img src="https://vuematerial.io/assets/logo-color.png">
        <div class="md-title">Login</div>
      </div>

      <div class="form">
        <md-field>
          <label>Username</label>
          <md-input v-model="username" autofocus></md-input>
        </md-field>

        <md-field md-has-password>
          <label>Password</label>
          <md-input v-model="password" type="password"></md-input>
        </md-field>
      </div>

      <div class="actions md-layout md-alignment-center-space-between">
        <a>Reset password</a>
        <md-button class="md-raised md-primary" @click="submitlogin">Log in</md-button>
      </div>

      <div class="loading-overlay" v-if="loading">
        <md-progress-spinner md-mode="indeterminate" :md-stroke="2"></md-progress-spinner>
      </div>

    </md-content>
    <div class="background" />
  </div>
</template>

<script>
import {fb} from '@/firebase'
export default {
  name: "App",
  data:() => ({
    loading: false,
    username:'',
    password:''
  }),
  methods: {
    submitlogin() {
      // your code to login user
      // different methods are available like get,post
      
      fb.auth().signInWithEmailAndPassword(this.username, this.password)
      .then(() => {
        console.log("logedin")
        console.log(fb.auth().currentUser.email)
        this.$router.push('/')
        // then will work only if server is able to send some data
      })
      

      /*
      this.axios.post('http://localhost:5000/submitlogin',{username:this.username,password:this.password})
      .then((response) => {
       console.log(response.data)
       this.$router.push('/')
       //then will work only if server is able to send some data
      })*/
      // this is only for example of loading
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 5000);
    }
  }
};
</script>

<style lang="scss" scoped>
.centered-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 80vh;
  .title {
    text-align: center;
    margin-bottom: 30px;
    img {
      margin-bottom: 16px;
      max-width: 80px;
    }
  }
  .actions {
    .md-button {
      margin: 0;
    }
  }
  .form {
    margin-bottom: 60px;
  }
  
  .md-content {
    z-index: 1;
    padding: 40px;
    width: 100%;
    max-width: 400px;
    position: relative;
  }
  .loading-overlay {
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
