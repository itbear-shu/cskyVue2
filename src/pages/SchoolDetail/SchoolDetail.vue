<template>
  <div>
    <el-backtop>
      <i class="el-icon-caret-top"></i>
    </el-backtop>
    <el-breadcrumb separator-class="el-icon-arrow-right" style="margin: 0 20px;">
      <el-breadcrumb-item></el-breadcrumb-item>
      <el-breadcrumb-item to="/schools">院校列表</el-breadcrumb-item>
      <el-breadcrumb-item>上海大学</el-breadcrumb-item>
    </el-breadcrumb>
   <div class="all">
     <school-introduce></school-introduce>
     <profession-introduce></profession-introduce>
     <teacher-introduce></teacher-introduce>
   </div>
  </div>
</template>

<script>
import ProfessionIntroduce from '@/components/ExamInfo/index'
import SchoolIntroduce from '@/components/SchoolIntroduce/index'
import TeacherIntroduce from '@/components/TeacherIntroduce/index'
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
