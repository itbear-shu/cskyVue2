<template>
  <div>
    <h1>招考信息</h1>
    <el-row style="height: auto">
      <el-col class="elCol1">
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
      <el-col class="elCol2">
        <el-card shadow="always">
          <el-descriptions direction="vertical"
                           :column="1" size="medium" :colon="false">
            <el-descriptions-item>
              <router-link style="color: #4cb9fc; text-decoration: none" to="/home">
                招生简章
              </router-link>
            </el-descriptions-item>
            <el-descriptions-item>
              <router-link style="color: #4cb9fc; text-decoration: none" to="/home">
                成绩查询
              </router-link>
            </el-descriptions-item>
            <el-descriptions-item>
              <router-link style="color: #4cb9fc; text-decoration: none" to="/home">
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
  data() {
    return {

    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 22px;
}
.elCol1 {
  margin: 14px 0;
  width: 700px;
  float: left;
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
