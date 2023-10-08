<script setpu lang="ts">

</script>

<template>
  <div class="foot_div">
    <div>
      <el-divider content-position="center">@队伍名字</el-divider>
    </div>
    <div class="content">
      <el-descriptions :column="2" size="samll" >
        <el-descriptions-item label="Github">
          <el-link href="https://github.com/zjuter/Confess-Wall-for-zjuters">
            https://github.com/zjuter/Confess-Wall-for-zjuters &ensp;&ensp;&ensp;
          </el-link>
        </el-descriptions-item>
        <el-descriptions-item label="Designed by">
          队伍名字
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<style scoped>
.foot_div {
  position: fixed;
  left: 2%;
  right: 2%;
  bottom: 2%;
}
</style>
