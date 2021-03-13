<template>
	<section class="login">
		<el-form
			ref="formRef"
			:rules="loginFormRules"
			:model="loginFormData"
			class="login-container"
		>
			<el-form-item label="用户邮箱" prop="identifier">
				<el-input
					placeholder="输入邮箱"
					v-model="loginFormData.identifier"
				></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="credential">
				<el-input
					placeholder="输入密码"
					type="password"
					v-model="loginFormData.credential"
				></el-input>
			</el-form-item>
			<el-form-item size="large">
				<el-button type="primary" @click="onSign">登录</el-button>
				<el-button type="info" @click="onRegister">注册用户</el-button>
			</el-form-item>
		</el-form>
	</section>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { ElMessage } from "element-plus";

import { sign, register } from "../api/user.js";
import { nextTick, onMounted } from "@vue/runtime-core";
export default {
	setup() {
		const loginFormData = reactive({
			identifier: "",
			credential: "",
			identity_type: "email",
		});
		const formRef = ref(null);
		const loginFormRules = {
			identifier: [
				{
					trigger: "blur",
					required: true,
					message: "请输入邮箱",
				},
			],
			credential: [
				{
					trigger: "blur",
					required: true,
					message: "请输入密码",
				},
			],
		};

		async function onSign() {
			try {
				let resVaii = await formRef.value.validate();
				console.log(resVaii);
				const res = await sign(loginFormData);
				const { code, msg, data } = res;
				if (code === 200) {
					console.log(data);
				} else {
					throw msg;
				}
			} catch (error) {
				if (typeof error === "string") {
					ElMessage.error(error);
				} else {
					for (const key in error) {
						ElMessage.error(error[key][0].message);
						await nextTick()
					}
				}
			}
		}

		async function onRegister(){
			ElMessage.info('click')
		}
		onMounted(() => {
			onSign;
		});

		return {
			loginFormData,
			onSign,
			loginFormRules,
			formRef,
			onRegister
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