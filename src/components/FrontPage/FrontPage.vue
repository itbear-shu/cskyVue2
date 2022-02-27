<template>
  <div class="all">
    <el-card shadow="always">
      <el-row :gutter="20">
        <el-col :xs="12" :sm="12" :md="11" :lg="10" :xl="12">
          <!--    轮播图      -->
          <el-carousel :interval="5000" arrow="always" class="carousel">
            <el-carousel-item v-for="item in 5" :key="item">
              <img :src='"@/assets/carousel/img" + item + ".png"' :alt="item">
<!--              <el-image :src='getImgUrl(item)'>-->
<!--                <div slot="placeholder" class="image-slot">-->
<!--                  加载中<span class="dot">...</span>-->
<!--                </div>-->
<!--              </el-image>-->
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :xs="12" :sm="12" :md="13" :lg="14" :xl="12">
          <el-tabs tab-position="right" class="tabs">
            <el-tab-pane label="招生公告">
              <el-row>
                <el-col>
                  <el-card shadow="always" class="infoCard">
                    <ul>
                      <li>
                        <router-link :to="{
                          path: '/article',
                          query: {
                            id: 10
                          }
                        }">10</router-link>
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
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "FrontPage",
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>
.carousel {
}
img{
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
