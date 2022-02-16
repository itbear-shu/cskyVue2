<template>
  <el-row class="all">
    <el-col>
      <el-card shadow="always">
        <!--    轮播图      -->
        <span>
          <el-carousel :interval="4000" type="card" height="350px" :loop="true" class="carousel">
            <el-carousel-item v-for="item in 6" :key="item">
              <img :src='"../../assets/carousel/img" + item + ".png"' :alt="item">
            </el-carousel-item>
          </el-carousel>
          <el-tabs tab-position="right" class="tabs">
            <el-tab-pane label="招生公告">
              <el-row>
                <el-col>
                  <el-card shadow="always" class="infoCard">
                    <ul>
                      <li>
                        <router-link to="/article">河海大学2022年考研初试参考人数5207人</router-link>
                      </li>
                      <li>
                        <router-link to="/article">河海大学2022年考研初试参考人数5207人</router-link>
                      </li>
                      <li>
                        <router-link to="/article">河海大学2022年考研初试参考人数5207人</router-link>
                      </li>
                      <li>
                        <router-link to="/article">河海大学2022年考研初试参考人数5207人</router-link>
                      </li>
                      <li>
                        <router-link to="/article">河海大学2022年考研初试参考人数5207人</router-link>
                      </li>
                      <li>
                        <router-link to="/article">河海大学2022年考研初试参考人数5207人</router-link>
                      </li>
                      <li>
                        <router-link to="/article">河海大学2022年考研初试参考人数5207人</router-link>
                      </li>
                      <li>
                        <router-link to="/article">河海大学2022年考研初试参考人数5207人</router-link>
                      </li>
                      <li>
                        <router-link to="/article">中国传媒大学2022年硕士研究生招生报考材料提交系</router-link>
                      </li>
                    </ul>
                  </el-card>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="研招新闻">
              <el-row>
                <el-col>
                  <el-card shadow="always" class="infoCard">
                    报考
                  </el-card>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="报考指南">
              <el-row>
                <el-col>
                  <el-card shadow="always" class="infoCard">
                    复习
                  </el-card>
                </el-col>
              </el-row>
            </el-tab-pane>
          </el-tabs>
        </span>

      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "FrontPage",
}
</script>

<style scoped>
.carousel {
  width: 500px;
  display: block;
  float: left;
}
.tabs {
  margin: 20px 30px;
  width: 541px;
  float: right;
}
.infoCard {
  height: 313px;
  font-size: 16px;
}
li {
  margin-top: 5px;
}
a:hover {
  color: #90bbff;
  font-weight: bold;
}
</style>
