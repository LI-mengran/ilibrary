<template>
	<div data-v-56ef9446="" data-v-6c578607="" class="el-row is-justify-space-between el-row--flex">
	<div id="nav" >
		
	<router-link to="/userhome" >欢迎 </router-link> |  
	<p>&ensp; &ensp;</p> 
	<router-link to="/classroom" :username="username">预约 </router-link> 
	<router-link to="/checkin" :username="username" >签到 </router-link> 
	<a style=" cursor:pointer" @click="logout()">
	退出
	</a>
	<div data-v-56ef9446="" class="el-col el-col-2">
		<span data-v-56ef9446=""></span>
		<div data-v-56ef9446="" class="el-dropdown">
			<span data-v-56ef9446="" class=" el-icon--right el-dropdown-selfdefine    " aria-haspopup="list" aria-controls="dropdown-menu-2997" role="button" tabindex="0">
				{{username}}
			</span>
			</div>
		</div>
	</div>
	</div>
	
</template>

<script>
	export default{
		props:['username'],
		// data() {
		//     return {
		//       username: username.data
		//     }
		//   },
		// methods:{
		// 	lll(){
		// 		alert(username);
		// 	}
		// }
		methods:{
			logout(){
				this.$emit('userLogout');
			}
		}
	}
</script>

<style>
	#nav .school-active{
		color: white;
		border-bottom: 2px solid white;
	}
	#nav {
	  position: fixed;
	  top: 0;
	  left: 0;
	  right: 0;
	  margin-top: 0;
	  padding: 30px;
	  background: #2c3e50;
	  color: white;
	  display: flex;
	  align-items: center;
	  border-bottom: 2px solid #fede9c;
	  z-index: 2;
	}
	#nav a {
	  display: inline-block;
	  margin-right: 20px;
	  color: white;
	  opacity: 0.7;
	  border-bottom: 0px;
	  transition: 0.2 ease color;
	  text-decoration: none ;
	}
	#nav a.router-link-active,
	#nav a:hover {
	  opacity: 1;
	}
	
</style>