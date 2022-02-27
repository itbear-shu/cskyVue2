<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="20" :offset="2">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
          <el-breadcrumb-item></el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>搜索</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :xs="4" :sm="3" :md="2" :lg="3" :xl="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :xs="16" :sm="18" :md="19" :lg="18" :xl="20">
        <el-card shadow="always" class="search1">
          <el-input v-model="keyWord" class="search-input" placeholder="请输入关键字" size="small"></el-input>
          <el-card shadow="never" class="search2">
            <h1 class="search-title">123Da中文你哈噢噢噢噢</h1>
            <div class="search-content"><p>2zK6Pze53NHdwP{tM@s,],*tfI5|":CP:=z!IP^i*=yN5a@'2ucoZEL2zEI_SyGEb`JOV-</p></div>
            <div class="search-left">
              <div class="icon-like">
                <svg style="margin-bottom: -3px;" t="1645944239121" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9980" width="16" height="16"><path d="M857.28 344.992h-264.832c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-71.808-153.792-140.544-143.808-60.608 8.8-89.536 59.904-89.536 125.536v59.296c0 76.064-58.208 140.928-132.224 148.064l-117.728-0.192A67.36 67.36 0 0 0 64 483.04V872c0 37.216 30.144 67.36 67.36 67.36h652.192a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824zM128 872V483.04c0-1.856 1.504-3.36 3.36-3.36H208v395.68H131.36A3.36 3.36 0 0 1 128 872z m767.328-417.088l-73.728 388.96a38.72 38.72 0 0 1-38.048 31.488H272V476.864a213.312 213.312 0 0 0 173.312-209.088V208.512c0-37.568 12.064-58.912 34.72-62.176 27.04-3.936 67.36 38.336 67.36 80.48 0 37.312-9.504 84-28.864 139.712a32 32 0 0 0 30.24 42.496h308.512a38.72 38.72 0 0 1 38.048 45.888z" p-id="9981" fill="#999999"></path></svg>
                111
              </div>
              <div class="icon-comment">
                <i class="el-icon-chat-line-round"></i>111
              </div>
            </div>
            <div class="search-right">
              <div class="search-author-name">
                dasn阿道夫·1
              </div>
              <div class="search-time">
                2022-1-1 11:11
              </div>
            </div>
          </el-card>
          <el-card shadow="never" class="search2">
            <h1 class="search-title">123Da中文你哈噢噢噢噢</h1>
            <div class="search-content"><p>2zK6Pze53NHdwP{tM@s,],*tfI5|":CP:=z!IP^i*=yN5a@'2ucoZEL2zEI_SyGEb`JOV-</p></div>
            <div class="search-left">
              <div class="icon-like">
                <svg style="margin-bottom: -3px;" t="1645944239121" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9980" width="16" height="16"><path d="M857.28 344.992h-264.832c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-71.808-153.792-140.544-143.808-60.608 8.8-89.536 59.904-89.536 125.536v59.296c0 76.064-58.208 140.928-132.224 148.064l-117.728-0.192A67.36 67.36 0 0 0 64 483.04V872c0 37.216 30.144 67.36 67.36 67.36h652.192a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824zM128 872V483.04c0-1.856 1.504-3.36 3.36-3.36H208v395.68H131.36A3.36 3.36 0 0 1 128 872z m767.328-417.088l-73.728 388.96a38.72 38.72 0 0 1-38.048 31.488H272V476.864a213.312 213.312 0 0 0 173.312-209.088V208.512c0-37.568 12.064-58.912 34.72-62.176 27.04-3.936 67.36 38.336 67.36 80.48 0 37.312-9.504 84-28.864 139.712a32 32 0 0 0 30.24 42.496h308.512a38.72 38.72 0 0 1 38.048 45.888z" p-id="9981" fill="#999999"></path></svg>
                111
              </div>
              <div class="icon-comment">
                <i class="el-icon-chat-line-round"></i>111
              </div>
            </div>
            <div class="search-right">
              <div class="search-author-name">
                dasn阿道夫·1
              </div>
              <div class="search-time">
                2022-1-1 11:11
              </div>
            </div>
          </el-card>
          <el-pagination
              style="text-align: center; margin-top: 10px; margin-bottom: 20px;"
              background
              :page-size="size"
              :current-page="current"
              @current-change="currentChange"
              layout="prev, pager, next"
              :total="total">
          </el-pagination>
        </el-card>
      </el-col>
      <el-col :xs="4" :sm="3" :md="3" :lg="2" :xl="2">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      current: 1,
      size: 10,
      total: 0,
      keyWord: '',
      result: []
    }
  },
  mounted() {
    this.keyWord = this.$route.params.keyWord
  },
  methods: {
    async search() {
      const result = await this.$API.reqSearchArticle({
        text: '',
        current: this.current,
        size: this.size
      })
      if (result.data.code === 200) {
        this.current = result.data.data.current
        this.size = result.data.data.size
        this.total = result.data.data.total
        this.result = result.data.data.articleBriefParams
      } else {
        this.$message.error(result.data.msg)
      }
    },
    currentChange(current) {
      this.current = current
    }
  },
  watch: {
    keyWord() {
      this.search()
    }
  }
}
</script>

<style scoped>
.search1 {
  margin: 21px 0 0 0;
}
.search-input {
  width: 160px;
  margin-bottom: 6px;
}
.search2 {
  margin: 6px 0 0 0;
}
.search-title {
  color: #42b983;
  margin: -5px 0 7px 0;
  font-size: 18px;
  vertical-align: top;
}
.search-content {
  font-size: 11px;
  color: #595963;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -moz-box;
  -moz-line-clamp: 2;
  -moz-box-orient: vertical;
  word-wrap: break-word;
  word-break: break-all;
  white-space: normal;
}
.search-left {
  float: left;
  margin-top: 6px;
  margin-bottom: 10px;
}
.search-right {
  float: right;
  margin-top: 6px;
  margin-bottom: 10px;
}
.icon-like {
  color: #999999;
  display: inline;
}
.icon-comment {
  color: #999999;
  margin-left: 79px;
  display: inline;
}
.search-author-name {
  color: #999999;
  margin-right: 73px;
  display: inline;
}
.search-time {
  color: #999999;
  display: inline;
}
</style>