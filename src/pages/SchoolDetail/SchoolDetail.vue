<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="20" :offset="2">
        <el-backtop>
          <i class="el-icon-caret-top"></i>
        </el-backtop>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
          <el-breadcrumb-item></el-breadcrumb-item>
          <el-breadcrumb-item to="/schools">院校列表</el-breadcrumb-item>
          <el-breadcrumb-item>{{school.sname}}</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
   <div class="all">
     <school-introduce :schoolIntroduce="{
        introduction: school.introduction,
        address: school.address,
        phone: school.phone,
        officialSite: school.officialSite,
        postgraduateSite: school.postgraduateSite,
        sname: school.sname
     }">
     </school-introduce>
     <profession-introduce></profession-introduce>
     <teacher-introduce></teacher-introduce>
   </div>
  </div>
</template>

<script>
import ProfessionIntroduce from '@/components/ExamInfo/ExamInfo'
import SchoolIntroduce from '@/components/SchoolIntroduce/SchoolIntroduce'
import TeacherIntroduce from '@/components/TeacherList/TeacherList'

export default {
  name: "SchoolDetail",
  components: {
    ProfessionIntroduce,
    SchoolIntroduce,
    TeacherIntroduce
  },
  data() {
    return {
      school: {}
    }
  },
  methods: {
    async getSchoolDetail(sid) {
      const result = await this.$API.reqGetSchoolDetailBySid(sid)
      if (result.data.code === 200) {
        this.school = result.data.data
      } else {
        this.$message.warning('系统异常~ ' + result.data.msg)
      }
    }
  },
  mounted() {
    this.getSchoolDetail(this.$route.query.sid)
  }
}
</script>

<style scoped>
.all {
  margin: 20px 30px;
}
</style>
