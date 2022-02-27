<template>
<div class="all">
  <el-row :gutter="20">
    <el-col :span="20" :offset="2">
      <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
        <el-breadcrumb-item></el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :xs="0" :sm="1" :md="1" :lg="3" :xl="4">
      <div class="grid-content bg-purple"></div>
    </el-col>
    <el-col :xs="24" :sm="22" :md="22" :lg="18" :xl="16">
      <FrontPage></FrontPage>
    </el-col>
    <el-col :xs="0" :sm="1" :md="1" :lg="3" :xl="4">
      <div class="grid-content bg-purple-light"></div>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :xs="2" :sm="2" :md="2" :lg="4" :xl="5">
      <div class="grid-content bg-purple"></div>
    </el-col>
    <el-col :xs="10" :sm="10" :md="10" :lg="8" :xl="7">
      <el-card shadow="always">
        <h1>研招答疑</h1>
        <ul>
          <li>
            <router-link :to="{ path: '/article', query: { id: 10}}">10</router-link>
          </li>
        </ul>
      </el-card>
    </el-col>
    <el-col :xs="10" :sm="10" :md="10" :lg="8" :xl="7">
      <el-card shadow="always">
        <h1>考研大纲</h1>
        <ul>
          <li>
            <router-link :to="{ path: '/article', query: { id: 10}}">10</router-link>
          </li>
        </ul>
      </el-card>
    </el-col>
    <el-col :xs="2" :sm="2" :md="2" :lg="4" :xl="5">
      <div class="grid-content bg-purple-light"></div>
    </el-col>
  </el-row>
</div>
</template>

<script>
import FrontPage from "@/components/FrontPage/FrontPage"

export default {
  name: "Home",
  components: {
    FrontPage
  },
}
</script>

<style scoped>

</style>
