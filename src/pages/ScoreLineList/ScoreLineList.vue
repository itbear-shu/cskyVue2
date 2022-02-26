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
            v-loading="loading"
            :data="scorelineList"
            lazy
            style="width: 100%; margin-top: 10px;">
          <el-table-column
              label="序号"
              type="index"
              fixed
              width="50">
          </el-table-column>
          <el-table-column
              fixed
              label="学校名称"
              width="140">
            <template slot-scope="scope">
              <router-link :to="{path: '/scoreLine',query: {sid: scope.row.schoolId}}" style="color: #5cb87a; text-decoration: none; font-weight: bold;">{{scope.row.sname}}</router-link>
            </template>
          </el-table-column>
          <el-table-column
              fixed
              prop="collegeName"
              label="学院名称"
              width="110">
          </el-table-column>
          <el-table-column
              prop="majorCode"
              label="专业编码"
              width="80">
          </el-table-column>
          <el-table-column
              prop="majorName"
              label="专业名称"
              width="100">
          </el-table-column>
          <el-table-column
              label="专业方向"
              width="90">
            <template slot-scope="scope">
              <div v-if="scope.row.majorDir">{{scope.row.majorDir}}</div>
              <div v-if="!scope.row.majorDir">无</div>
            </template>
          </el-table-column>
          <el-table-column
              sortable
              prop="score21"
              label="2021年分数线"
              width="90">
          </el-table-column>
          <el-table-column
              sortable
              prop="score20"
              label="2020年分数线"
              width="90">
          </el-table-column>
          <el-table-column
              sortable
              prop="score19"
              label="2019年分数线"
              width="90">
          </el-table-column>
          <el-table-column
              prop="politicsSubject"
              label="政治科目"
              width="90">
          </el-table-column>
          <el-table-column
              prop="mathSubject"
              label="数学科目"
              width="100">
          </el-table-column>
          <el-table-column
              prop="englishSubject"
              label="英语科目"
              width="100">
          </el-table-column>
          <el-table-column
              prop="computerSubject"
              label="专业课"
              width="180">
          </el-table-column>
        </el-table>
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
      scorelineList: [],
      loading: true
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
        this.current = result.data.data.current
        this.size = result.data.data.size
        this.total = result.data.data.total
        this.scorelineList = result.data.data.scorelineVoList
        this.loading = false
      } else {
        this.$message.error(result.data.msg)
      }
    },
    currentChange(current) {
      this.current = current
      this.getScoreLineList()
    }
  }
}
</script>

<style scoped>

</style>