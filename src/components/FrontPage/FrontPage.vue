<template>
  <el-row class="all">
    <el-col>
      <el-card shadow="always">
        <el-tabs tab-position="right" style="height: 500px;" class="all">
          <el-carousel :interval="4000" type="card" height="200px" style="width: 500px">
            <el-carousel-item v-for="item in 6" :key="item">
              <h3 class="medium">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
          <el-tab-pane label="首页" style="float: right">
            <el-row>
              <el-col>
                <el-card shadow="always">
                  首页
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
        </el-tabs>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "FrontPage"
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
