<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="20" :offset="2">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
          <el-breadcrumb-item></el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>考研分数线汇总</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :xs="4" :sm="2" :md="2" :lg="2" :xl="2">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :xs="16" :sm="20" :md="20" :lg="20" :xl="20">
        <el-table
            :data="scorelineList"
            lazy
            style="width: 100%; margin-top: 10px;">
          <el-table-column
              type="selection"
              width="100">
          </el-table-column>
          <el-table-column
              prop="year"
              sortable
              label="年份"
              width="200"
          >
          </el-table-column>
          <el-table-column
              prop="subjectCode"
              label="专业代码"
              width="280">
          </el-table-column>
          <el-table-column
              prop="subject"
              label="专业名称"
              width="280">
          </el-table-column>
          <el-table-column label="操作"
                           width="250"
          >
            <template slot-scope="scope">
              <el-button
                  type="warning"
                  size="mini"
                  @click="handleDownload(scope.$index, scope.row)">点击下载</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
            style="text-align: center; margin-top: 10px;"
            small
            :page-size="size"
            :current-page="current"
            @current-change="currentChange"
            layout="prev, pager, next"
            :total="total">
        </el-pagination>
      </el-col>
      <el-col :xs="4" :sm="2" :md="2" :lg="2" :xl="2">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: "ScoreLineList",
  data() {
    return {
      current: 1,
      size: 10,
      total: 0,
      scorelineList: []
    }
  },
  mounted() {
    this.getScoreLineList()
  },
  methods: {
    async getScoreLineList() {
      const result = await this.$API.reqGetScoreLineList({
        current: this.current,
        size: this.size
      })
      if (result.data.code === 200) {
        console.log(result)
        this.current = result.data.data.current
        this.size = result.data.data.size
        this.total = result.data.data.total
        this.scorelineList = result.data.data.scorelineList
      } else {
        this.$message.error(result.data.msg)
      }
    }
  }
}
</script>

<style scoped>

</style>