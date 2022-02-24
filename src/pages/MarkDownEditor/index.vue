<template>
  <div id="editor">
    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="60%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="所属高校">
          <el-autocomplete
              v-model="state"
              :fetch-suggestions="querySearchAsync"
              placeholder="请输入学校名称"
              @select="handleSelect"
          ></el-autocomplete>
        </el-form-item>
        <el-form-item label="活动性质">
          <el-transfer
              filterable
              :filter-method="filterMethod"
              filter-placeholder="请输入标签名"
              v-model="tagNameValue"
              :data="tagNameData">
          </el-transfer>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="saveArticle">立即发布</el-button>
          <el-button @click="dialogVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!--  面包屑  -->
    <el-row :gutter="20" class="all">
      <el-col :span="20" :offset="2">
        <el-backtop>
          <i class="el-icon-caret-top"></i>
        </el-backtop>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item></el-breadcrumb-item>
          <el-breadcrumb-item>帖子</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="head">
      <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
        <h1 style="font-size: 20px;">文章标题</h1>
      </el-col>
      <el-col :xs="10" :sm="14" :md="14" :lg="14" :xl="14">
        <el-input v-model="title" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
        <el-button type="success" @click="toSaveArticle">发布文章</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="20" :offset="2">
        <mavon-editor v-model="mdText" class="me-editor"></mavon-editor>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {mavonEditor} from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
  name: "index",
  components: {
    mavonEditor
  },
  data() {
    const generateData = () => {
      const data = [];
      const tagNameList = this.tagNameList;
      tagNameList.forEach((tag, index) => {
        data.push({
          label: tag.tagName,
          key: index,
        });
      });
      return data;
    };
    return {
      mdText: '',
      title: '',
      dialogVisible: false,
      tagIdList: [],
      schoolId: 0,
      form: {},
      schoolList: [],
      state: '',
      timeout: null,
      tagNameList: [],
      tagNameData: generateData(),
      tagNameValue: [],
    }
  },
  methods: {
    filterMethod(query, item) {
      // return item.pinyin.indexOf(query) > -1;
    },
    toSaveArticle() {
      this.dialogVisible = true
      this.getTagNameList()
    },
    async saveArticle() {
      if (!this.schoolId) {
        this.$message.warning('请选择学校...')
        return
      }
      if (!this.tagIdList) {
        this.$message.warning('请选择文章所属标签...')
        return
      }
      const result = await this.$API.reqSaveArticle({
        title: this.title,
        content: this.mdText,
        schoolId: this.schoolId,
        authorId: this.$store.state.user.userInfo.userId,
        tagIdList: this.tagIdList
      })
      if (result.data.code === 200) {
          //1
      }
    },
    async getTagNameList() {
      const result = await this.$API.reqGetTagNameList()
      if (result.data.code === 200) {
        this.tagNameList = result.data.data
      } else {
        this.$message.error('系统异常~ ' + result.data.msg)
      }
    },
    /**
     * 学校列表
     * @returns {Promise<void>}
     */
    async loadAll() {
      const result = await this.$API.reqGetSchoolNameList()
      if (result.data.code === 200) {
        this.schoolList= result.data.data.map((school) => {
          return {
            value: school.sname,
            name: school.sid,
          };
        });
      } else {
        this.$message.error('系统异常~ ' + result.data.msg)
      }
    },
    querySearchAsync(queryString, cb) {
      let schoolList = this.schoolList;
      let results = queryString ? schoolList.filter(this.createStateFilter(queryString)) : schoolList;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 2000 * Math.random());
    },
    createStateFilter(queryString) {
      return (state) => {
        return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    handleSelect(item) {
      this.schoolId = item.name
    }
  },
  mounted() {
    this.loadAll()
  }
}
</script>

<style scoped>
.head {
  margin: 5px 0 10px 0;
}

#editor {
  height: 100px;
  margin: 20px 30px;
}

.me-editor {
  z-index: 6 !important;
}

</style>
