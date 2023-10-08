<script setpu lang="ts">

import {ref} from "vue";
import router from "../routers";
import {storeToRefs} from "pinia";


const pushTologin = () => {
  router.push("/Login");
}

const pushTosign = () => {
  router.push("/Sign");
}

const pushTohome= () => {
  router.push("/");
}

</script>

<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo menu"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
  >
<!-- UI界面调整什么的以后再说，先把基础功能完善了再说   -->
    <el-menu-item index="0">
      <div>
        表白墙&ensp;&ensp;&ensp;
        <el-tag>队伍名字</el-tag>
      </div>
    </el-menu-item>
    <el-menu-item index="1" @click="pushTohome">
      <div>
        首页
      </div>
    </el-menu-item>
    <div class="flex-grow" />
      <div>
        <el-button type="primary" @click="pushTologin" round>登录</el-button>
      </div>
        &ensp;&ensp;&ensp;
      <div>
        <el-button round @click="pushTosign" >注册</el-button>
      </div>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>

.flex-grow {
  flex-grow: 1;
}

.menu {
  position :  fixed;
  left: 2%;
  top: 2%;
  right: 2%;
}

</style>
