<template>
  <div id="editor">
    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
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
        <el-button type="primary" @click="save(0)">保存草稿</el-button>
        <el-button type="success" @click="save(1)">发布文章</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="20" :offset="2">
        <mavon-editor v-model="mdText"></mavon-editor>
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
    return {
      mdText: '',
      title: '',
      dialogVisible: false
    }
  },
  methods: {
    save(index) {
      this.dialogVisible = true
      this.$API.reqSaveArticle({
        title: this.title,
        content: this.mdText,
        status: index,
        aid: 0,
        authorId: this.$store.state.user.userInfo.userId
      })
    }
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

</style>
