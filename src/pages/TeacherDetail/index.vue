<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" style="margin: 0 20px;">
      <el-breadcrumb-item></el-breadcrumb-item>
      <el-breadcrumb-item to="/schools">院校列表</el-breadcrumb-item>
      <el-breadcrumb-item>上海大学</el-breadcrumb-item>
      <el-breadcrumb-item>教师</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="all">
      <h1>师资介绍</h1>
      <el-row class="elCol2">
        <el-col>
          <el-card shadow="always">
            <el-descriptions title="教师信息" direction="vertical" :column="1" size="medium">
              <el-descriptions-item label="个人介绍">
                <span style="color: #003f81">
                  陈红，女，1965年5月生，博士、教授、博士生导师。中国计算机学会数据库专委会委员、传感器网络专委会执行委员，教育部高等学校计算机科学与技术专业教学指导分委员会专家工作组成员。
                </span></el-descriptions-item>
              <el-descriptions-item label="个人主页">
                <a rel="nofollow" href="http://www.shu.edu.cn/" target="_blank" style="color: #4cb9fc;">
                  http://bi.ruc.edu.cn/chen/index_ch.html
                </a>
              </el-descriptions-item>
              <el-descriptions-item label="Email">
                <span style="color: #003f81">
                  chong@ruc.edu.cn
                </span>
              </el-descriptions-item>
              <el-descriptions-item label="生涯履历">
                <span style="color: #003f81">
                1986年在中国人民大学获工学学士学位，1989年在中国人民大学获工学硕士学位，2000年在中科院计算所获工学博士学位。香港中文大学、香港城市大学、柏林洪堡大学、美国UIUC大学访问学者。主持和参加国家“核高基”重大专项项目、国家863计划重大专项项目、国家863计划探索导向项目、国家973项目、国家自然科学基金重点项目、国家自然科学基金面上项目、教育部科学技术研究重点项目等国家级项目和省部级项目近三十项；在国内外学术期刊和学术会议上公开发表论文180余篇，出版著译作8部。参加了具有自主版权的并行数据库系统软件的研制，主持了具有自主版权的数据仓库与OLAP系列系统软件、传感器网络查询处理软件的研制。获软件著作权3项，申请国家发明专利4项。获北京市科学技术进步二等奖、教育部科学技术进步二等奖、国家精品课程奖、北京市精品课程奖等奖励，2005年入选教育部新世纪优秀人才支持计划。
                </span>
              </el-descriptions-item>
              <el-descriptions-item label="研究方向">
                 <span style="color: #003f81">
                数据仓库与数据挖掘、传感器网络中的数据管理、数据流管理与挖掘。
                 </span>
              </el-descriptions-item>
            </el-descriptions>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>
.all {
  margin: 20px 30px;
}
.elCol2 {
  margin: 14px 0;
  height: 400px;
}
</style>
