<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="20" :offset="2">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
          <el-breadcrumb-item></el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>考研真题</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :xs="7" :sm="5" :md="3" :lg="2" :xl="0">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :xs="5" :sm="7" :md="9" :lg="10" :xl="12">

      </el-col>
      <el-col :xs="5" :sm="7" :md="9" :lg="10" :xl="12">

      </el-col>
      <el-col :xs="7" :sm="5" :md="3" :lg="2" :xl="0">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "ExamQuestion"
}
</script>

<style scoped>

</style>