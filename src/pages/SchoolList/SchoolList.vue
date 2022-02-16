<template>
  <el-row :gutter="20">
    <el-col :span="20" :offset="2">
      <el-backtop>
        <i class="el-icon-caret-top"></i>
      </el-backtop>
      <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
        <el-breadcrumb-item></el-breadcrumb-item>
        <el-breadcrumb-item>院校列表</el-breadcrumb-item>
      </el-breadcrumb>
      <div>
        <el-row class="elRow">
          <el-col class="elCol">
            <el-card shadow="hover" class="elCard">
              <img src="@/assets/shu.jpg">
              <router-link to="/schoolDetail">
                上海大学
              </router-link>
              <div>
                上海大学（Shanghai
                University），简称“上大”，位于上海市，是上海市属、国家“211工程”重点建设的综合性大学，教育部与上海市人民政府共建高校，世界一流学科建设高校，入选国家“111计划”、卓越工程师教育培养计划、卓越新闻传播人才教育培养计划、国家建设高水平大学公派研究生项目、教育部来华留学示范基地、上海市首批高水平地方高校建设试点、上海市首批深化创新创业教育改革示范高校。
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Schools",
  data() {
    return {}
  }
}
</script>

<style scoped>
.elRow {
  margin: 20px 30px;
  border-radius: 4px
}

.elCol {
}

.elCard {
}

.elCard img {
  height: 100px;
  width: 80px;
  float: left;
  padding: 5px;
  margin: 0 10px 0 -13px;
}

.elCard a {
  font-size: 25px;
  font-weight: bold;
  color: black;
  text-decoration: none;
  margin: -5px 0 5px 0;
  display: block;
}
.elCard a:hover {
  color: #4cb9fc;
}

.elCard div {
  font-size: 16px;
}
</style>
