<template>
	<div id="nav">
	<router-link to="/">登录</router-link> |  
	<p>&ensp; &ensp;</p> 
	<router-link to="/Register">注册</router-link>
	</div>
</template>

<script>
	
</script>

<style lang="css">
	#nav .school-active{
		color: rgb(170, 204, 223);
		border-bottom: none;

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
	  border-bottom: 2px solid #a5fef0;
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
	  opacity: 0.5;
	}
</style>