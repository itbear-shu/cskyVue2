<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="20" :offset="2">
        <h1>师资介绍</h1>
      </el-col>
      <el-col :span="24" :offset="2">
        <el-table
            @cell-click="toTeacherDetail"
            highlight-current-row
            :data="teacherList"
            style="width: 100%;">
          <el-table-column
              prop="id"
              label="序号"
              type="index"
              width="100">
          </el-table-column>
          <el-table-column
              prop="tname"
              label="教师姓名"
              width="200">
          </el-table-column>
          <el-table-column
              prop="studydir"
              label="专业方向"
              width="500">
          </el-table-column>
          <el-table-column
              label="操作"
              align="center"
              width="200">
            <template slot="header" slot-scope="scope">
              <el-input
                  v-model="search"
                  size="mini"
                  placeholder="输入关键字搜索"/>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="20">
        <el-pagination
            style="text-align: center; margin-top: 10px;"
            :page-size="5"
            :current-page="currentPage"
            small
            @current-change="currentChange"
            layout="prev, pager, next"
            :total="total">
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "TeacherList",
  data() {
    return {
      teacherList: [],
      currentPage: 1,
      pages: 0,
      total: 0,
      search: ''
    }
  },
  mounted() {
    this.getTeacherList()
  },
  methods: {
    toTeacherDetail(val) {
      this.$router.push({
        path: "/teacherDetail",
        query: {
          tid: val.id
        }
      })
    },
    async getTeacherList() {
      const result = await this.$API.reqGetTeacherList(this.$route.query.sid, this.currentPage)
      if (result.data.code === 200) {
        this.teacherList = result.data.data.teacherVoList
        this.total = result.data.data.total
        this.pages = result.data.data.pages
      } else {
        this.$message.warning('系统异常~ ' + result.data.msg)
      }
    },
    currentChange(currentPage) {
      this.currentPage = currentPage
      this.getTeacherList()
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 22px;
}

.all {
  margin: 0 0 0 0;
}
</style>
