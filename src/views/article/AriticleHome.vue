<script setup>
import {artGetDetailService} from "@/api/article";
import { ref, onMounted } from 'vue';

const articles = ref([]); // 存储多篇文章内容

onMounted(async () => {
  const ids = [24398, 24838, 24841]; // 不同的文章 ID
  const promises = ids.map(id => artGetDetailService(id)); // 创建 Promise 对象
  console.log(promises);
  const responses = await Promise.all(promises); // 等待所有 Promise 完成
  articles.value = responses.map(res => ({
    id: res.data.data.id,
    username: res.data.data.cate_name === "匿名" ? "匿名" : res.data.data.username,
    content: res.data.data.content
  }));
});
</script>

<template>
  <page-container title="表白墙">
    <!-- 使用 v-for 指令循环渲染多篇文章 -->
    <div v-for="article in articles" :key="article.id" class="article-block">
      <div class="article-username">{{ article.username }}</div>
      <div class="article-content" v-html="article.content"></div>
    </div>
  </page-container>
</template>

<style lang="scss" scoped>
.article-block {
  margin-bottom: 20px; // 添加块之间的下边距
}

.article-username {
  font-weight: bold; // 设置用户名字体加粗
}

.article-content {
  margin-top: 5px; // 设置内容与用户名之间的上边距
}
</style>
