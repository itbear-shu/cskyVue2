<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="20" :offset="2">
        <h1>学校介绍</h1>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col class="elCol1" :span="14" :push="2">
        <el-card shadow="always">
          <div>
            <MarkDown :text="introduce" class="content"/>
          </div>
        </el-card>
      </el-col>
      <el-col class="elCol2" :span="10" :push="2">
        <el-card shadow="always">
          <el-descriptions title="学校信息" direction="vertical" :column="1" size="medium">
            <el-descriptions-item label="学校地址"><span style="color: #77b72c">上海市宝山区上大路99号</span></el-descriptions-item>
            <el-descriptions-item label="联系电话"><span style="color: #77b72c">021-66133763/66</span></el-descriptions-item>
            <el-descriptions-item label="学校官网"><a rel="nofollow" href="http://www.shu.edu.cn/" target="_blank" style="color: #4cb9fc; text-decoration: none;">上海大学</a></el-descriptions-item>
            <el-descriptions-item label="研究生院"><a rel="nofollow" href="http://yjszs.shu.edu.cn/" target="_blank" style="color: #4cb9fc; text-decoration: none;">上海大学研究生院官网</a></el-descriptions-item>
          </el-descriptions>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MarkDown from '@/components/MarkDown/MarkDown'

export default {
  name: "index",
  components: {
    MarkDown
  },
  data() {
    return {
      introduce: `# 上海大学简介

上海大学（Shanghai University），简称“上大”，位于[上海市](https://baike.baidu.com/item/上海市/127743)，是上海市属、国家“[211工程](https://baike.baidu.com/item/211工程/203547)”重点建设的[综合性大学](https://baike.baidu.com/item/综合性大学/5076820)，教育部与[上海市人民政府](https://baike.baidu.com/item/上海市人民政府/8624563)共建高校，世界一流学科建设高校，入选国家“[111计划](https://baike.baidu.com/item/111计划/10958807)”、[卓越工程师教育培养计划](https://baike.baidu.com/item/卓越工程师教育培养计划/4942299)、卓越新闻传播人才教育培养计划、[国家建设高水平大学公派研究生项目](https://baike.baidu.com/item/国家建设高水平大学公派研究生项目/819876)、[教育部来华留学示范基地](https://baike.baidu.com/item/教育部来华留学示范基地/19650396)、上海市首批高水平地方高校建设试点、上海市首批深化创新创业教育改革示范高校。

1922年10月，[国共合作](https://baike.baidu.com/item/国共合作/10588)曾创建了上海大学，1927年被国民党当局强行关闭。1983年，上海市人民政府在复旦大学分校、上海外国语学院分院、[华东师范大学仪表电子分校](https://baike.baidu.com/item/华东师范大学仪表电子分校/19723727)、上海科学技术大学分校、上海机械学院轻工分院、上海市美术学校的基础上成立上海大学。1994年5月，新的上海大学由上海工业大学（成立于1960年）、上海科学技术大学（成立于1958年）、原上海大学（成立于1983年）和上海科技高等专科学校（成立于1959年）合并组建而成。

截至2020年5月31日，上海大学有宝山校区（校本部）、延长校区、嘉定校区3个校区，校园占地面积近200万平方米，校舍建筑面积140万平方米；

上海大学学科门类齐全，涵盖*哲学*、经济学、**法学、教育学**、文学、历史学、理学、工学、医学、管理学、艺术学、交叉学科等学科门类。现设有30个学院和1个校管系。 `
    }
  },
}
</script>

<style scoped>
.elCol1 {
  margin: 14px 0;
  /*width: 700px;*/
  /*float: left;*/
}
.elCol2 {
  width: 348px;
  margin: 14px 6px;
  height: 400px;
}
h1 {
  font-size: 22px;
}
</style>
