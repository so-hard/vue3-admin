<template>
	<section class="login">
		<el-form ref="form" :model="loginFormData" class="login-container">
			<el-form-item label="用户名">
				<el-input v-model="loginFormData.username"></el-input>
			</el-form-item>
			<el-form-item label="密码">
				<el-input v-model="loginFormData.passwold" type="passworld"></el-input>
			</el-form-item>
		</el-form>
	</section>
</template>

<script>
import { reactive } from "@vue/reactivity";
export default {
	setup() {
		const loginFormData = reactive({ username: "", passwold: "" });
		return {
			loginFormData,
		};
	},
};
</script>

<style lang="stylus" scoped>
.login {
	background: url('https://w.wallhaven.cc/full/rd/wallhaven-rddgwm.jpg');
	background-size: cover;
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
}

.login-container {
	padding: 30px;
	background: #fff;
	height: auto;
	width: 20vw;
	transform: translateX(50%);
}
</style>