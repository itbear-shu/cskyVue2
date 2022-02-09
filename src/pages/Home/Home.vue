<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
      <el-breadcrumb-item></el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    </el-breadcrumb>
    <FrontPage></FrontPage>
    <ApplyExam></ApplyExam>
    <Review></Review>
    <!--    <el-tabs tab-position="right" style="height: 200px;" class="all">
          <el-tab-pane label="首页">
            <el-row>
              <el-col>
                <el-card shadow="always">
                  首页
                </el-card>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="考研时间线">
            <el-row>
              <el-col>
                <el-card shadow="always">
                  考研时间线
                </el-card>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="报考">
            <el-row>
              <el-col>
                <el-card shadow="always">
                  报考
                </el-card>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="复习">
            <el-row>
              <el-col>
                <el-card shadow="always">
                  复习
                </el-card>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>-->
  </div>
</template>

<script>
import FrontPage from "@/components/FrontPage/FrontPage"
import ApplyExam from "@/components/ApplyExam/ApplyExam"
import Review from "@/components/Review/Review"

export default {
  name: "Home",
  components: {
    FrontPage, ApplyExam, Review,
  },
  data() {
    return {}
  },
  mounted() {

  },
  computed: {},
  methods: {}
}
</script>

<style scoped>

</style>
