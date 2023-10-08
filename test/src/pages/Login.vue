<script setup lang = "ts">
import login from "../components/login.vue"
import {ref} from "vue";
const sonInfo =ref("");

const sonSetInfo = (value : string)=>{
  sonInfo.value=value;
  alert(sonInfo.value);
}

</script>

<template>
  <login @clear="sonSetInfo" />
</template>

<style scoped>

</style>