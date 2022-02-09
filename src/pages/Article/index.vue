<template>
  <div>
    <el-backtop>
      <i class="el-icon-caret-top"></i>
    </el-backtop>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
      <el-breadcrumb-item></el-breadcrumb-item>
      <el-breadcrumb-item>帖子</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="all">
      <el-row>
        <el-col class="elCol1">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span id="title">上海大学是一所重点建设的综合性大学</span>
              <span class="icon">
                <span style="margin-right: 10px;">
                  <i class="el-icon-chat-line-round"></i>
                  <span>100</span>
                </span>
                <span>
                  <i class="el-icon-view"></i>
                  <span>100</span>
                </span>
              </span>
            </div>
            <div class="userInfo">
              <router-link to="/home" class="userLink" style="text-decoration: none;">
                小熊
              </router-link>
              2022年2月8日18:47发表
            </div>
            <MarkDown :text="content" class="content"/>
            <div class="lcs">
              <a href="javascript:void(0);" class="endEmg" style="text-decoration: none;">
                <img src="@/assets/icon/like.png" alt="点赞">
                点赞
                <span>(100)</span>
              </a>
              <a href="javascript:void(0);" class="endEmg" style="text-decoration: none;">
                <img src="@/assets/icon/collect.png" alt="收藏">
                收藏
                <span>(100)</span>
              </a>
              <a href="javascript:void(0);" class="endEmg" style="text-decoration: none;">
                <img src="@/assets/icon/share.png" alt="转发">
                转发
                <span>(100)</span>
              </a>
            </div>
            <div class="tags">
              相关标签：
              <el-tag size="small">标签一</el-tag>
            </div>
          </el-card>
        </el-col>
        <el-col class="elCol2">
          <el-card shadow="hover">
            <div class="hotTags">热门标签</div>
            <el-tag class="hotTag">计算机考研</el-tag>
            <el-tag class="hotTag">学习</el-tag>
            <el-tag class="hotTag">学校是个好地方</el-tag>
            <el-tag class="hotTag">上海大学</el-tag>
            <el-tag class="hotTag">上海的大学</el-tag>
            <el-tag class="hotTag">上海的大学</el-tag>
            <el-tag class="hotTag">上海的大学</el-tag>
            <el-tag class="hotTag">学校地啊书法大赛址</el-tag>
          </el-card>
        </el-col>
        <el-col class="elCol3">
          <el-card shadow="hover">
            <div class="hotTags">更多文章</div>
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
            </ul>
          </el-card>
        </el-col>
        <el-col class="elCol4">
          <el-card class="box-card">
            <div>
              <Comment
                  v-model="data"
                  :user="currentUser"
                  :before-submit="addComment"
                  :before-delete="deleteComment"
                  :before-like="likeComment"
                  :upload-img="uploadOrCopyImg"
                  :props="props"
              />
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import MarkDown from '@/components/MarkDown/index'
import Comment from 'vue-juejin-comment'
export default {
  name: "index",
  components: {
    MarkDown, Comment
  },
  data() {
    return {
      content: `# 上海大学

上海大学**（Shanghai University）**，简称“上大”，位于[上海市](https://baike.baidu.com/item/上海市/127743)，是上海市属、国家“[211工程](https://baike.baidu.com/item/211工程/203547)”重点建设的[综合性大学](https://baike.baidu.com/item/综合性大学/5076820)，教育部与[上海市人民政府](https://baike.baidu.com/item/上海市人民政府/8624563)共建高校，世界一流学科建设高校，入选国家“[111计划](https://baike.baidu.com/item/111计划/10958807)”、[卓越工程师教育培养计划](https://baike.baidu.com/item/卓越工程师教育培养计划/4942299)、卓越新闻传播人才教育培养计划、[国家建设高水平大学公派研究生项目](https://baike.baidu.com/item/国家建设高水平大学公派研究生项目/819876)、[教育部来华留学示范基地](https://baike.baidu.com/item/教育部来华留学示范基地/19650396)、上海市首批高水平地方高校建设试点、上海市首批深化创新创业教育改革示范高校。

1922年10月，[国共合作](https://baike.baidu.com/item/国共合作/10588)曾创建了上海大学，1927年被国民党当局强行关闭。1983年，上海市人民政府在复旦大学分校、上海外国语学院分院、[华东师范大学仪表电子分校](https://baike.baidu.com/item/华东师范大学仪表电子分校/19723727)、上海科学技术大学分校、上海机械学院轻工分院、上海市美术学校的基础上成立上海大学。1994年5月，新的上海大学由上海工业大学（成立于1960年）、上海科学技术大学（成立于1958年）、原上海大学（成立于1983年）和上海科技高等专科学校（成立于1959年）合并组建而成。

截至2020年5月31日，上海大学有**宝山校区**（校本部）、**延长校区**、**嘉定校区**3个校区，校园占地面积近200万平方米，校舍建筑面积140万平方米；

上海大学学科门类齐全，涵盖*哲学、经济学、法学、教育学、文学、历史学、理学、工学、医学、管理学、艺术学、交叉学科*等学科门类。现设有30个学院和1个校管系。上海大学**（Shanghai University）**，简称“上大”，位于[上海市](https://baike.baidu.com/item/上海市/127743)，是上海市属、国家“[211工程](https://baike.baidu.com/item/211工程/203547)”重点建设的[综合性大学](https://baike.baidu.com/item/综合性大学/5076820)，教育部与[上海市人民政府](https://baike.baidu.com/item/上海市人民政府/8624563)共建高校，世界一流学科建设高校，入选国家“[111计划](https://baike.baidu.com/item/111计划/10958807)”、[卓越工程师教育培养计划](https://baike.baidu.com/item/卓越工程师教育培养计划/4942299)、卓越新闻传播人才教育培养计划、[国家建设高水平大学公派研究生项目](https://baike.baidu.com/item/国家建设高水平大学公派研究生项目/819876)、[教育部来华留学示范基地](https://baike.baidu.com/item/教育部来华留学示范基地/19650396)、上海市首批高水平地方高校建设试点、上海市首批深化创新创业教育改革示范高校。

1922年10月，[国共合作](https://baike.baidu.com/item/国共合作/10588)曾创建了上海大学，1927年被国民党当局强行关闭。1983年，上海市人民政府在复旦大学分校、上海外国语学院分院、[华东师范大学仪表电子分校](https://baike.baidu.com/item/华东师范大学仪表电子分校/19723727)、上海科学技术大学分校、上海机械学院轻工分院、上海市美术学校的基础上成立上海大学。1994年5月，新的上海大学由上海工业大学（成立于1960年）、上海科学技术大学（成立于1958年）、原上海大学（成立于1983年）和上海科技高等专科学校（成立于1959年）合并组建而成。

截至2020年5月31日，上海大学有**宝山校区**（校本部）、**延长校区**、**嘉定校区**3个校区，校园占地面积近200万平方米，校舍建筑面积140万平方米；

上海大学学科门类齐全，涵盖*哲学、经济学、法学、教育学、文学、历史学、理学、工学、医学、管理学、艺术学、交叉学科*等学科门类。现设有30个学院和1个校管系。上海大学**（Shanghai University）**，简称“上大”，位于[上海市](https://baike.baidu.com/item/上海市/127743)，是上海市属、国家“[211工程](https://baike.baidu.com/item/211工程/203547)”重点建设的[综合性大学](https://baike.baidu.com/item/综合性大学/5076820)，教育部与[上海市人民政府](https://baike.baidu.com/item/上海市人民政府/8624563)共建高校，世界一流学科建设高校，入选国家“[111计划](https://baike.baidu.com/item/111计划/10958807)”、[卓越工程师教育培养计划](https://baike.baidu.com/item/卓越工程师教育培养计划/4942299)、卓越新闻传播人才教育培养计划、[国家建设高水平大学公派研究生项目](https://baike.baidu.com/item/国家建设高水平大学公派研究生项目/819876)、[教育部来华留学示范基地](https://baike.baidu.com/item/教育部来华留学示范基地/19650396)、上海市首批高水平地方高校建设试点、上海市首批深化创新创业教育改革示范高校。

1922年10月，[国共合作](https://baike.baidu.com/item/国共合作/10588)曾创建了上海大学，1927年被国民党当局强行关闭。1983年，上海市人民政府在复旦大学分校、上海外国语学院分院、[华东师范大学仪表电子分校](https://baike.baidu.com/item/华东师范大学仪表电子分校/19723727)、上海科学技术大学分校、上海机械学院轻工分院、上海市美术学校的基础上成立上海大学。1994年5月，新的上海大学由上海工业大学（成立于1960年）、上海科学技术大学（成立于1958年）、原上海大学（成立于1983年）和上海科技高等专科学校（成立于1959年）合并组建而成。

截至2020年5月31日，上海大学有**宝山校区**（校本部）、**延长校区**、**嘉定校区**3个校区，校园占地面积近200万平方米，校舍建筑面积140万平方米；

上海大学学科门类齐全，涵盖*哲学、经济学、法学、教育学、文学、历史学、理学、工学、医学、管理学、艺术学、交叉学科*等学科门类。现设有30个学院和1个校管系。上海大学**（Shanghai University）**，简称“上大”，位于[上海市](https://baike.baidu.com/item/上海市/127743)，是上海市属、国家“[211工程](https://baike.baidu.com/item/211工程/203547)”重点建设的[综合性大学](https://baike.baidu.com/item/综合性大学/5076820)，教育部与[上海市人民政府](https://baike.baidu.com/item/上海市人民政府/8624563)共建高校，世界一流学科建设高校，入选国家“[111计划](https://baike.baidu.com/item/111计划/10958807)”、[卓越工程师教育培养计划](https://baike.baidu.com/item/卓越工程师教育培养计划/4942299)、卓越新闻传播人才教育培养计划、[国家建设高水平大学公派研究生项目](https://baike.baidu.com/item/国家建设高水平大学公派研究生项目/819876)、[教育部来华留学示范基地](https://baike.baidu.com/item/教育部来华留学示范基地/19650396)、上海市首批高水平地方高校建设试点、上海市首批深化创新创业教育改革示范高校。

1922年10月，[国共合作](https://baike.baidu.com/item/国共合作/10588)曾创建了上海大学，1927年被国民党当局强行关闭。1983年，上海市人民政府在复旦大学分校、上海外国语学院分院、[华东师范大学仪表电子分校](https://baike.baidu.com/item/华东师范大学仪表电子分校/19723727)、上海科学技术大学分校、上海机械学院轻工分院、上海市美术学校的基础上成立上海大学。1994年5月，新的上海大学由上海工业大学（成立于1960年）、上海科学技术大学（成立于1958年）、原上海大学（成立于1983年）和上海科技高等专科学校（成立于1959年）合并组建而成。

截至2020年5月31日，上海大学有**宝山校区**（校本部）、**延长校区**、**嘉定校区**3个校区，校园占地面积近200万平方米，校舍建筑面积140万平方米；

上海大学学科门类齐全，涵盖*哲学、经济学、法学、教育学、文学、历史学、理学、工学、医学、管理学、艺术学、交叉学科*等学科门类。现设有30个学院和1个校管系。 `,
      comments: '',
      data: [
        {
          id: '1', // 唯一 id，必需
          content: 'abc', // 评论内容，必需
          imgSrc: '', // 评论中的图片地址，非必需
          children: [], // 子评论（回复），非必需
          likes: 11, // 点赞数，非必需
          reply: null, // 子评论（回复）人信息，非必需
          createAt: null, // 评论时间，必需
          user: { // 评论人信息，必需
            author: false // 是否为作者，类型为 Boolean，非必需
          }
        }, {
          id: '1', // 唯一 id，必需
          content: 'abc', // 评论内容，必需
          imgSrc: '', // 评论中的图片地址，非必需
          children: [], // 子评论（回复），非必需
          likes: 11, // 点赞数，非必需
          reply: null, // 子评论（回复）人信息，非必需
          createAt: null, // 评论时间，必需
          user: { // 评论人信息，必需
            author: false // 是否为作者，类型为 Boolean，非必需
          }
        }
      ],
      props: {},
      currentUser: {
        name: '1',
        avatar: '1',
        author: true,
      },
    }
  },
  methods: {
    addComment(comment, parent, add) {
      // ...

      // 需调用 add 函数，并传入 newComment 对象
      // add(newComment)
    },
    deleteComment(comment, parent) {
      // ...
    },
    likeComment(comment) {
      // ...
    },
    uploadOrCopyImg({ file, callback }) {
      // ...

      // callback(imgUrl) // 图片地址必传
    },
  }
}
</script>

<style scoped>
.all {
  margin: 20px 30px;
}

#title {
  font-size: 32px;
  line-height: 36px;
}

.icon {
  font-size: 17px;
  float: right;
  margin: 10px 12px;
}

.userInfo {
  background-color: #f8f8f8;
  width: 645px;
  height: 40px;
  line-height: 40px;
  font-size: 13px;
}

.userLink {
  margin: auto 12px;
  color: #4cb9fc;
}

.content {
  margin: 25px 2px;
}

.lcs {
  text-align: center;
  margin: 22px auto;
}

.endEmg {
  margin: auto 20px;
  font-size: 15px;
  font-weight: bold;
  color: #77b72c;
}

.tags {
  font-size: 14px;
}

.hotTags {
  font-size: 16px;
  font-weight: 700;
  margin: 0 auto 15px 0;
}

.hotTag {
  margin: 6px 5px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.elCol1 {
  margin: 14px 0;
  width: 700px;
  float: left;
}

.elCol2 {
  right: 10px;
  width: 348px;
  margin: 14px 6px;
  height: 205px;
  position: fixed;
}

.elCol3 {
  width: 348px;
  right: 10px;
  bottom: -40px;
  margin: 14px 6px;
  height: 205px;
  position: fixed;
}

.liLink {
  font-size: 13px;
  margin: 8px auto;
}

.elCol4 {
  margin: 0 0;
  width: 700px;
  float: left;
}
</style>
