<template>
	<div data-v-56ef9446="" data-v-6c578607="" class="el-row is-justify-space-between el-row--flex">
	<div id="nav" >
		
	<router-link to="/userhome" >欢迎 </router-link> |
	<p>&ensp; &ensp;</p> 
	<router-link to="/manage" > 管理 </router-link> 
	<a style=" cursor:pointer" @click="logout()">
	退出
	</a>
	</div>
	</div>
</template>

<script>
	export default{

		methods:{
			logout(){
				this.$emit('userLogout');
			}
		}
	}
</script>

<style>
</style>