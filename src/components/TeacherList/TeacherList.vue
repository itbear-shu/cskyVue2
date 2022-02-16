<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="20" :offset="2">
        <h1>师资介绍</h1>
      </el-col>
      <el-col :span="14" :offset="2">
        <el-table
            :data="teacherList"
            style="width: 100%;"
            :row-class-name="tableRowClassName">
          <el-table-column
              prop="teacherName"
              label="教师姓名"
              width="400">
          </el-table-column>
          <el-table-column
              prop="proDirection"
              label="专业方向"
              width="400">
          </el-table-column>
          <el-table-column label="操作" width="200">
            <template slot-scope="scope">
              <el-button size="mini" type="info" @click="toTeacherDetail">查看详细信息</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="16">
        <el-pagination
            style="text-align: center;margin-top: 10px;"
            :page-size="10"
            small
            layout="prev, pager, next"
            :total="50">
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
      teacherList: [{teacherName: "陈红", proDirection: '计算机应用技术'},
        {teacherName: "陈红", proDirection: '计算机应用技术'},
        {teacherName: "陈红", proDirection: '计算机应用技术'},
        {teacherName: "陈红", proDirection: '计算机应用技术'},
      ]
    }
  },
  mounted() {
  },
  methods: {
    tableRowClassName({row, rowIndex}) {
      console.log(rowIndex)
      if (rowIndex % 3 === 0) {
        return 'warning-row';
      } else if (rowIndex % 3 === 1) {
        return 'success-row';
      }
      return '';
    },
    toTeacherDetail() {
      this.$router.push({path: "/teacherDetail"})
    }
  },
  computed: {}
}
</script>

<style scoped>
h1 {
  font-size: 22px;
}

.all {
  margin: 0 0 0 0;
}

.el-table .warning-row {
  background: #d59113;
}

.el-table .success-row {
  background: #40f50f;
}
</style>
