<template>
<div class="all">
  <el-row :gutter="20">
    <el-col :span="20" :offset="1">
      <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
        <el-breadcrumb-item></el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :xs="0" :sm="2" :md="1" :lg="1" :xl="1">
      <div class="grid-content bg-purple"></div>
    </el-col>
    <el-col :xs="24" :sm="20" :md="22" :lg="22" :xl="22">
      <FrontPage></FrontPage>
    </el-col>
    <el-col :xs="0" :sm="2" :md="1" :lg="1" :xl="1">
      <div class="grid-content bg-purple-light"></div>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :xs="7" :sm="5" :md="1" :lg="2" :xl="1">
      <div class="grid-content bg-purple"></div>
    </el-col>
    <el-col :xs="5" :sm="7" :md="11" :lg="10" :xl="11">
      <ApplyExam></ApplyExam>
    </el-col>
    <el-col :xs="5" :sm="7" :md="11" :lg="10" :xl="11">
      <Review></Review>
    </el-col>
    <el-col :xs="7" :sm="5" :md="1" :lg="1" :xl="1">
      <div class="grid-content bg-purple-light"></div>
    </el-col>
  </el-row>
</div>
</template>

<script>
import FrontPage from "@/components/FrontPage/FrontPage"
import ApplyExam from "@/components/ApplyExam/ApplyExam"
import Review from "@/components/Review/Review"

export default {
  name: "Home",
  components: {
    FrontPage, ApplyExam, Review,
  },
  data() {
    return {}
  },
  mounted() {

  },
  computed: {},
  methods: {}
}
</script>

<style scoped>

</style>
