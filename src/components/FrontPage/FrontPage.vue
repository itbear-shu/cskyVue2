<template>
  <div class="all">
    <el-card shadow="always">
      <el-row :gutter="20">
        <el-col :xs="20" :sm="10" :md="11" :lg="10" :xl="11">
          <!--    轮播图      -->
          <el-carousel :interval="5000" arrow="always" class="carousel">
            <el-carousel-item v-for="item in 5" :key="item">
              <img :src='"@/assets/carousel/img" + item + ".png"' :alt="item">
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :xs="1" :sm="14" :md="13" :lg="14" :xl="13">
          <el-tabs tab-position="right" class="tabs">
            <el-tab-pane label="招生公告">
              <el-card shadow="always" class="infoCard">
                <ul>
                  <li>
                    <router-link :to="{ path: '/article', query: { id: 10}}">10</router-link>
                  </li>
                </ul>
              </el-card>
            </el-tab-pane>
            <el-tab-pane label="研招新闻">
              <el-card shadow="always" class="infoCard">
                <ul>
                  <li>
                    <router-link :to="{ path: '/article', query: { id: 10}}">10</router-link>
                  </li>
                </ul>
              </el-card>
            </el-tab-pane>
            <el-tab-pane label="报考指南">
              <el-card shadow="always" class="infoCard">
                <ul>
                  <li>
                    <router-link :to="{ path: '/article', query: { id: 10}}">10</router-link>
                  </li>
                </ul>
              </el-card>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "FrontPage",
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
.carousel {
}

img {
  height: 100%;
  width: 100%;
}


.tabs {
  margin: 0 0;
}

.infoCard {
  height: 299px;
  font-size: 16px;
}

li {
  margin-top: 6px;
}

a:hover {
  color: #90bbff;
  font-weight: bold;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
