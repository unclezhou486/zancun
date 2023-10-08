<script lang="ts" setup>
import { reactive, ref, h } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import loginService from "../apis/loginService.ts";
import router from "../routers";
interface RuleForm {
  name: string
  password: string
  check_password: string
  star_sign: string
}

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  name: "",
  password: "",
  check_password: "",
  star_sign: "",
})

const checkPassword = (rule: any, value: any,callback: any) => {
  if(value !== ruleForm.password) {
      callback(new Error("确认密码与密码不匹配"))
  }
  else{
    callback()
  }
}

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: '请输入您的用户名', trigger: 'blur' },
    { min: 1, max: 20, message: '用户名的长度应当小于20', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入您的密码', trigger: 'blur'},
    { min:6, max: 20,message: '密码的长度应当小于15',trigger: 'blur'},
  ],
  check_password: [
    {required: true,validator: checkPassword, trigger: 'blur'},
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const onSubmit = async () => {
  if (ruleForm.name !== "" && ruleForm.password !== "" && ruleForm.check_password !== "" && ruleForm.star_sign !== "") {
    if (ruleForm.password !== ruleForm.check_password) {
      ElNotification({
        title: "失败",
        message: h("i", { style: "color: teal" }, "两次输入的密码不一致,请重新输入！"),
      });
    }

    const res = await loginService.sign(ruleForm);

    if (res.data.code === 200 && res.data.msg === "OK") {
      console.log(ruleForm);
      ElNotification({
        title: "成功",
        message: h("i", { style: "color: teal" }, "注册成功！"),
      });
      router.push("/login");
    }
    else if (res.data.code === 200501 && res.data.msg === "参数错误") {
      ElNotification({
        title: "失败",
        message: h("i", { style: "color: teal" }, "参数错误！"),
      });
    }
    else if (res.data.code === 200504 && res.data.msg === "手机号已注册") {
      ElNotification({
        title: "失败",
        message: h("i", { style: "color: teal" }, "手机号已注册！"),
      });
    }
    else {
      ElNotification({
        title: "失败",
        message: h("i", { style: "color: teal" }, "注册失败，请检查网络！"),
      });
    }
  }
  else {
    ElNotification({
      title: "失败",
      message: h("i", { style: "color: teal" }, "注册失败，请至少输入完整的姓名、电话号码和密码！"),
    });
  }
}

</script>
<template>
  <el-col :span="24">
    <div class="div">
      <div >
        <h1>
          用户注册
        </h1>
        <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="rules"
            label-width="120px"
            class="demo-ruleForm"
            :size="formSize"
            status-icon
        >
          <el-form-item label="用户名" prop="name">
            <el-input v-model="ruleForm.name" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
          </el-form-item>
          <el-form-item label="确认密码" prop="check_password">
            <el-input v-model="ruleForm.check_password" type="password" autocomplete="off" />
          </el-form-item>
          <el-form-item label="星座" prop="star_sign">
            <el-input v-model="ruleForm.star_sign" autocomplete="off" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" class="button">
              创建
            </el-button>
            &ensp;&ensp;&ensp;
            <el-button @click="resetForm(ruleFormRef)" class="button">清空</el-button>
          </el-form-item>
        </el-form>
      </div>

    </div>
  </el-col>

</template>

<style scoped>
.div {
  width: 500px;
  height: 500px;
}
.button {
  margin: 20px;
  width: 100px;
}
</style>



