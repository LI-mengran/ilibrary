<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <myLogin /> -->
  <!-- <Register></Register> -->
  
  <LoginNevigation v-if="LoginStatus=='anonymous'" ></LoginNevigation>
  <UserNevigation v-else-if="LoginStatus=='student'" :username="username" @userLogout="userLogout"></UserNevigation>
  
  <div>
  		<router-view @userLogin = "userLogin" @adminLogin = "adminLogin"></router-view>
  </div>
</template>

<script> 
// import HelloWorld from './components/HelloWorld.vue'

import LoginNevigation from './components/Home/TheNevigation.vue'
import UserNevigation from './components/UserView/TheNevigation_user.vue'
import router from './router'

export default {

  // name: 'App',
  components: {
    // HelloWorld,
	LoginNevigation,
	UserNevigation
  },
   
  data() {
  	return {
  		LoginStatus:"anonymous",
		username:"anonymous",
  	}
  },
  methods: {
  	userLogin(status,username) {
  		if(status == true){
			this.LoginStatus = "student"
			this.username = username
			router.push({name:'Userhome'})
		}
  	},
	userLogout(){
		this.LoginStatus = "anonymous"
		router.push("/")
	}
	
	// adminLogin(status) {
	// 	if(status == true){
	// 		this.LoginStatus = student
			
	// 	}
		
	// }
  },
  created() {
        if (this.$router.path !== "/")
          this.$router.replace("/")
      }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
