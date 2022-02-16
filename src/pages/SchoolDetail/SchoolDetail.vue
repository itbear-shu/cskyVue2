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
          <el-breadcrumb-item>上海大学</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
   <div class="all">
     <school-introduce></school-introduce>
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
}
</script>

<style scoped>
.all {
  margin: 20px 30px;
}
</style>
