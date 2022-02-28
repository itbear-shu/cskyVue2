<template>
  <div class="all">
    <el-card shadow="always">
      <el-row :gutter="20">
        <el-col :xs="20" :sm="10" :md="11" :lg="10" :xl="11">
          <!--    轮播图      -->
          <el-carousel :interval="5000" arrow="always" class="carousel">
            <el-carousel-item v-for="img in imgList" :key="img">
              <img :src='img' :alt="img">
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :xs="1" :sm="14" :md="13" :lg="14" :xl="13">
          <el-tabs tab-position="right" class="tabs">
            <el-tab-pane label="招生公告">
              <el-card shadow="always" class="infoCard">
                <ul>
                  <li v-for="item in list1" :key="item.id">
                    <router-link :to="{ path: '/article', query: { id: item.id}}">{{ item.title }}</router-link>
                  </li>
                </ul>
              </el-card>
            </el-tab-pane>
            <el-tab-pane label="研招新闻">
              <el-card shadow="always" class="infoCard">
                <ul>
                  <li v-for="item in list2" :key="item.id">
                    <router-link :to="{ path: '/article', query: { id: item.id}}">{{ item.title }}</router-link>
                  </li>
                </ul>
              </el-card>
            </el-tab-pane>
            <el-tab-pane label="报考指南">
              <el-card shadow="always" class="infoCard">
                <ul>
                  <li v-for="item in list3" :key="item.id">
                    <router-link :to="{ path: '/article', query: { id: item.id}}">{{ item.title }}</router-link>
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
    return {
      list1: [],
      list2: [],
      list3: [],
      imgList: ['https://pic3.zhimg.com/v2-20b5479e59afdc31a7c5c436f879f2ee_1440w.jpg?source=172ae18b',
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F13428701351%2F1000.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648652161&t=1a1e4a3a7b41b3f9370da0724bccad2f',
        'https://pics3.baidu.com/feed/b8014a90f603738d5f1f4373b6572157f919ecd9.jpeg?token=eb76aee582f8f87f6d0400b68a64b78d',]
    }
  },
  methods: {
    async getArticleByTid(tid) {
      const result = await this.$API.reqGetArticleByTid(tid)
      if (result.data.code === 200) {
        return result.data.data
      } else {
        return []
      }
    }
  },
  async mounted() {
    this.list1 = await this.getArticleByTid(24)
    this.list2 = await this.getArticleByTid(25)
    this.list3 = await this.getArticleByTid(23)
  }
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
