<template>
	<head>
		<meta charset="utf-8">
		<meta content="IE=edge" http-equiv="X-UA-Compatible">
		<meta content="width=device-width,initial-scale=1" name="viewport">
		<title>ilibrary</title>
		</head>
	<body>
	<div data-v-3e5e7921 data-v-2df4ed72 class = "root" >
		<div data-v-3e5e7921 class = "loginBox" style="height:350px;">
			<form data-v-3e5e7921="" class="el-form loginForm">
				<div data-v-3e5e7921="" class="el-form-item">
					<div class="el-form-item__content">
						<h1 data-v-3e5e7921="">登      录</h1>
					</div>
				</div>
				<div data-v-3e5e7921="" class="el-form-item is-required">
					<div class="el-form-item__content">
						<div data-v-3e5e7921="" class="el-input el-input--prefix">
							<input type="text" autocomplete="off" placeholder="请输入学号" class="el-input__inner" id="username" required>
							<span class="el-input__prefix">
								<i class="el-input__icon el-icon-user"></i>
							</span>
						</div>
					</div>
				</div>
				<div data-v-3e5e7921="" class="el-form-item is-required">
							<div class="el-form-item__content">
								<div data-v-3e5e7921="" class="el-input el-input--prefix el-input--suffix">
									<input type="password" autocomplete="off" placeholder="请输入密码" class="el-input__inner" id="password" required>
									<span class="el-input__prefix">
										<i class="el-input__icon el-icon-lock"></i>
									</span>
									<span class="el-input__suffix">
										<span class="el-input__suffix-inner">
										</span>
										<div id="extwaiokist" style="display:none" v="fcoon" q="53c0c22b" c="204.1" i="208" u="29.86" s="05022301" sg="svr_04262315-ga_05022301-bai_04042310" d="1" w="false" e="" a="2" m="BMe=" vn="3gtra">
											<div id="extwaigglbit" style="display:none" v="fcoon" q="53c0c22b" c="204.1" i="208" u="29.86" s="05022301" sg="svr_04262315-ga_05022301-bai_04042310" d="1" w="false" e="" a="2" m="BMe=">
											</div>
										</div>
									</span>
								</div>
							</div>
						</div>
						<div data-v-3e5e7921="" class="el-form-item">
							<div class="el-form-item__content">
								<button data-v-3e5e7921="" type="button" class="el-button button el-button--primary" @click="userLogin()">
								<span>用户登录 </span>
								</button>
							</div>
						</div>
						<div data-v-3e5e7921="" class="el-form-item">
							<div class="el-form-item__content">
								<button data-v-3e5e7921="" type="button" class="el-button button el-button--admin" @click="adminLogin()">
								<span>管理员登录 </span>
								</button>
							</div>
						</div>
				</form>
		</div>
		
	</div>
	</body>
</template>

<script>
	import $ from 'jquery'
	import { ref, onMounted } from 'vue'
	export default {
		name: 'myLogin',
		// props: ['userLogin'],
		emits: ['userLogin'],
		methods:{
			
			toSignUp(){
					alert("注册成功");
			},
			userLogin(){
				const _this = this;
				let user_info = {
				  "username": $('#username').val(),
				  "password": $('#password').val(),
				};
				
				$.post({
				  url: "http://10.177.44.64/ibooking/auth/login",
				  data: JSON.stringify(user_info),
				  contentType: "application/json",
				}).done(function(data, textStatus, jqXHR) {
				  if (data.code == 1000) {
				    _this.$emit('userLogin', true, $('#username').val());
				  } else {
				    alert("用户信息错误");
				  }
				}).fail(function(jqXHR, textStatus, errorThrown) {
				  alert(textStatus + ": " + errorThrown);
				});
			},
			adminLogin(){
				const _this = this;
				let admin_info = {
				  "username": $('#username').val(),
				  "password": $('#password').val(),
				};
				
				$.post({
				  url: "http://10.177.44.64/ibooking/auth/admin_login",
				  data: JSON.stringify(admin_info),
				  contentType: "application/json",
				}).done(function(data, textStatus, jqXHR) {
				  if (data.code == 2000) {
				    _this.$emit('adminLogin', true);
				  } else {
				    alert("管理员信息错误");
				  }
				}).fail(function(jqXHR, textStatus, errorThrown) {
				  alert(textStatus + ": " + errorThrown);
				});
			}
	
		},
		mounted () {
			// [{"id":2,"username":"22210240199","email":"1394306693@qq.com","pphone":"19921260737"}]
		  // this.$router.replace('/admin/dashboard')
		}
		
	}
	

</script>

<style>

</style>