<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="20" :offset="2">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
          <el-breadcrumb-item></el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>搜索</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :xs="4" :sm="3" :md="2" :lg="3" :xl="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :xs="16" :sm="18" :md="19" :lg="18" :xl="20">
        <el-pagination
            style="text-align: center; margin-top: 10px; margin-bottom: 20px;"
            background
            :page-size="size"
            :current-page="current"
            @current-change="currentChange"
            layout="prev, pager, next"
            :total="total">
        </el-pagination>
      </el-col>
      <el-col :xs="4" :sm="3" :md="3" :lg="2" :xl="2">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      current: 1,
      size: 10,
      total: 0,
    }
  },
  mounted() {
    this.search()
  },
  methods: {
    search() {
      this.$message.warning(this.$route.params.keyWord)
    },
    currentChange(current) {
      this.current = current
    }
  }
}
</script>

<style scoped>

</style>