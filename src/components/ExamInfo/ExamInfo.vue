<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="20" :offset="2">
        <h1>招考信息</h1>
      </el-col>
    </el-row>
    <el-row style="height: auto" :gutter="20">
      <el-col class="elCol1" :span="14" :push="2">
        <el-card shadow="always">
          <ul>
            <li class="liLink">
              <router-link to="/home" style="text-decoration: none; color: #049cdb">复旦大学考研调剂信息回顾（2021年）</router-link>
            </li>
            <li class="liLink">
              <router-link to="/home" style="text-decoration: none; color: #049cdb">复旦大学考研调剂信息回顾（2021年）</router-link>
            </li>
            <li class="liLink">
              <router-link to="/home" style="text-decoration: none; color: #049cdb">复旦大学考研调剂信息回顾（2021年）</router-link>
            </li>
            <li class="liLink">
              <router-link to="/home" style="text-decoration: none; color: #049cdb">复旦大学考研调剂信息回顾（2021年）</router-link>
            </li>
            <li class="liLink">
              <router-link to="/home" style="text-decoration: none; color: #049cdb">复旦大学考研调剂信息回顾（2021年）</router-link>
            </li>
            <li class="liLink">
              <router-link to="/home" style="text-decoration: none; color: #049cdb">复旦大学考研调剂信息回顾（2021年）</router-link>
            </li>
            <li class="liLink">
              <router-link to="/home" style="text-decoration: none; color: #049cdb">复旦大学考研调剂信息回顾（2021年）</router-link>
            </li>
            <li class="liLink">
              <router-link to="/home" style="text-decoration: none; color: #049cdb">复旦大学考研调剂信息回顾（2021年）</router-link>
            </li>
            <li class="liLink">
              <router-link to="/home" style="text-decoration: none; color: #049cdb">复旦大学考研调剂信息回顾（2021年）</router-link>
            </li>
            <li class="liLink">
              <router-link to="/home" style="text-decoration: none; color: #049cdb">复旦大学考研调剂信息回顾（2021年）</router-link>
            </li>
          </ul>
          <el-pagination
              style="text-align: center"
              :page-size="10"
              small
              layout="prev, pager, next"
              :total="50">
          </el-pagination>
        </el-card>
      </el-col>
      <el-col class="elCol2" :span="10" :push="2">
        <el-card shadow="always">
          <el-descriptions direction="vertical"
                           :column="1" size="medium" :colon="false">
            <el-descriptions-item>
              <a style="color: #4cb9fc;" :href="recruitment.indexOf('URL: ') === -1 ? recruitment : recruitment.slice(4)">
                招生简章
              </a>
            </el-descriptions-item>
            <el-descriptions-item>
              <router-link style="color: #4cb9fc;" to="/scoreLine">
                分数线
              </router-link>
            </el-descriptions-item>
          </el-descriptions>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: "index",
  props: ['schoolIntroduce'],
  data() {
    return {
      sid: 0,
      sname: '',
      recruitment: ''
    }
  },
  watch: {
    schoolIntroduce(sc) {
      this.sid = sc.sid
      this.sname = sc.sname
      this.recruitment = sc.recruitment
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 22px;
}
.elCol1 {
  margin: 14px 0;
  /*width: 700px;*/
  /*float: left;*/
}
.liLink {
  font-size: 15px;
  margin: 12px auto;
}
.elCol2 {
  width: 348px;
  margin: 14px 6px;
  height: 400px;
}
</style>
