<template>
	<head>
		<meta charset="utf-8">
		<meta content="IE=edge" http-equiv="X-UA-Compatible">
		<meta content="width=device-width,initial-scale=1" name="viewport">
		<title>ilibrary</title>
		
		</head>
	<body>
	<div data-v-3e5e7921 data-v-2df4ed72 class = "root">
		<div data-v-3e5e7921 class = "loginBox" style="height: 400px;">
			<form data-v-3e5e7921="" class="el-form loginForm" >
				<div data-v-3e5e7921="" class="el-form-item" >
					<div class="el-form-item__content">
						<h1 data-v-3e5e7921="">注册</h1>
					</div>
				</div>
				<div data-v-3e5e7921="" class="el-form-item is-required">
					<div class="el-form-item__content">
						<div data-v-3e5e7921="" class="el-input el-input--prefix">
							<input type="text"  autocomplete="off" placeholder="请输入学号" class="el-input__inner" id="register_number" required>
							<span class="el-input__prefix">
								<i class="el-input__icon el-icon-user"></i>
							</span>
						</div>
					</div>
				</div>
				<div data-v-3e5e7921="" class="el-form-item is-required">
							<div class="el-form-item__content">
								<div data-v-3e5e7921="" class="el-input el-input--prefix el-input--suffix">
									<input type="password"  autocomplete="off" placeholder="请输入密码" class="el-input__inner" id="register_secret" required>
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
				<div data-v-3e5e7921="" class="el-form-item is-required">
					<div class="el-form-item__content">
						<div data-v-3e5e7921="" class="el-input el-input--prefix">
							<input type="text"  autocomplete="off" placeholder="请输入邮箱" class="el-input__inner" id="register_mail" required>
							<span class="el-input__prefix">
								<i class="el-input__icon el-icon-message"></i>
							</span>
						</div>
					</div>
				</div>
				<div data-v-3e5e7921="" class="el-form-item is-required">
					<div class="el-form-item__content">
						<div data-v-3e5e7921="" class="el-input el-input--prefix">
							<input type="text"  autocomplete="off" placeholder="请输入电话" class="el-input__inner" id="register_phone" required>
							<span class="el-input__prefix">
								<i class="el-input__icon el-icon-phone-outline"></i>
							</span>
						</div>
					</div>
				</div>
						<div data-v-3e5e7921="" class="el-form-item">
						<div class="el-form-item__content">
							<button data-v-3e5e7921="" type="button" class="el-button button el-button--default" @click="register()">
							<span class="text">注 册</span>
							</button>
						</div>
					</div>
				</form>
		</div>
		
	</div>
	</body>
</template>

<script>
	import { ref, onMounted } from 'vue'
	import $ from 'jquery'
	export default {
		name: 'Register',
		methods: {
			register(){
				// student_number = 
				var userInfo = {
					username:$("#register_number").val(),
					password:$('#register_secret').val(),
					email:$('#register_mail').val(),
					phone:$('#register_phone').val()
				}
				// alert(JSON.stringify(userInfo));
				$.ajax({
				  type: 'POST',
				  url: "http://10.177.44.64/ibooking/auth/register",
				  data:  JSON.stringify(userInfo),
				  dataType: "json",
				  accept: "*/*",
				  contentType:"application/json",
				  success: function(data){
					  if(data.code == 2000) alert("用户已存在");
					  else alert("注册成功");
				  },
				  error: function(xhr,status,error){
				  	alert(JSON.stringify(xhr));
				  },
				
				})
			}
			
		},
		mounted () {
		  // this.$router.replace('/admin/dashboard')
		}
	}

	// var student_number = ref("")
	// var student_secret = ref("")
</script>

<style>
</style>