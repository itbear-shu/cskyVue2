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
        <h1 style="font-size: 20px;">研招答疑</h1>
        <ul>
          <li style=" margin-bottom: 10px;" v-for="item in list1" :key="item.id">
            <router-link style="font-size: 15px;" :to="{ path: '/article', query: { id: item.id}}">{{ item.title }}</router-link>
          </li>
        </ul>
      </el-card>
    </el-col>
    <el-col :xs="10" :sm="10" :md="10" :lg="8" :xl="7">
      <el-card shadow="always">
        <h1>考研大纲</h1>
        <ul>
          <li style=" margin-bottom: 10px;" v-for="item in list2" :key="item.id">
            <router-link style="font-size: 15px;" :to="{ path: '/article', query: { id: item.id}}">{{ item.title }}</router-link>
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
import Vue from "vue";

export default {
  name: "Home",
  components: {
    FrontPage
  },
  data() {
    return {
      list1: [],
      list2: []
    }
  },
  methods: {
    async getArticleByTid(tid) {
      const result = await this.$API.reqGetArticleByTid(tid)
      if (result.data.code === 200) {
        return result.data.data
      } else {
        return []
      }
    }
  },
  async mounted() {
    const loading = Vue.prototype.$loading({
      lock: true, // 是否锁屏
      text: '拼命加载中', // 加载动画的文字
      spinner: 'el-icon-loading', // 引入的loading图标
      background: 'hsla(0,0%,100%,.9)' // 背景颜色
    });
    this.list1 = await this.getArticleByTid(26)
    this.list2 = await this.getArticleByTid(27)
    loading.close();
  }
}
</script>

<style scoped>

</style>
