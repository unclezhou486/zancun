<script setup lang="ts">
import {ref,h,ToRefs} from "vue";
import {ElNotification} from "element-plus";
import router from "../routers";
import {stringifyQuery} from "vue-router";
import loginService from "../apis/loginService.ts";
import loginStore from "../stores/loginStore.ts";

const input = ref("");
const password =ref("");
const newLoginStore =loginStore();
const emit = defineEmits(["clear"]);
// 清空
const login = async() => {
  if (input.value === "" || password.value === "") {
    ElNotification({
      title: "登陆失败！",
      message: h("i", { style: "color: teal" }, "您的账号或密码为空"),
    });
    return;
  }
  const loginInfo = ref({
    name: input.value,
    password:password.value
  });
  console.log(input.value);
  console.log(password.value);
  const res= await loginService.login(loginInfo.value);
  if(res.data.msg === "OK" &&res.data.code === "200"){
    const responseData=res.data.data;
    const message ="111111"+res.data.msg;
    ElNotification({
      title: "1111",
      message: h("i",{style:"color:teal"},message),
    });
    newLoginStore.setLogin(true);
    localStorage.setItem("login",String(true));
    localStorage.setItem("name",String(res.data.msg));
    newLoginStore.setLogin()
  }

  else {
    alert("error!");
    return;
  }

}

const clear = () => {
  input.value = "";
  password.value = "";

  emit("clear", "the string is cleared!");
}
</script>

<template>
  <div>
    <el-row class="row">
      <h1>
        用户登录
      </h1>
    </el-row>
  </div>
  <div class="div">
    <el-container>
      <label class="label">账号</label>
      <el-input v-model="input" placeholder ="请输入你的账号" clearable />
    </el-container>
    <br/>
    <el-container>
      <label class="label">密码</label>
      <el-input v-model="password" type="password" placeholder ="请输入你的密码" show-password />
    </el-container>
    <br/>
    <el-button type="primary"  @click="login" class="button">登录</el-button>
    <el-button @click="clear" class="button">清空</el-button>
  </div>
</template>

<style scoped>
.div {
  width: 400px;
  height: 80px;
  margin: 300px 10px 0 auto;
  position: relative;
  top:-250px;
}
.row {
  position: relative;
  right: -100px;
}
.label {
  margin-right: 10px;
}
.button {
  margin: 20px;
  width: 100px;
}
</style>