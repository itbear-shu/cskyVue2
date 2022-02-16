<template>
    <el-row :gutter="20">
      <el-col :span="20" :offset="2">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
          <el-breadcrumb-item></el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        </el-breadcrumb>
        <FrontPage></FrontPage>
        <ApplyExam></ApplyExam>
        <Review></Review>
      </el-col>
    </el-row>
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
