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
              :filter-method="filterTagName"
              filter-placeholder="请输入标签名"
              :props="{
                key: 'id',
                label: 'tagName'
              }"
              :titles="['全部标签', '已选标签']"
              v-model="tagIdList"
              :data="tagNameList">
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
        <mavon-editor
            v-model="mdText"
            class="me-editor"
            ref="md"
            @imgAdd="$imgAdd"
        ></mavon-editor>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {mavonEditor} from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
  name: "md",
  components: {
    mavonEditor
  },
  data() {
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
    }
  },
  methods: {
    // 绑定@imgAdd event
    $imgAdd(pos, $file) {
      // 第一步.将图片上传到服务器.
      var formdata = new FormData();
      formdata.append('image', $file);
      this.img_file[pos] = $file;
      this.$http({
        url: '/upload/image',
        method: 'post',
        data: formdata,
        headers: { 'Content-Type': 'multipart/form-data' },
      }).then((res) => {
        let _res = res.data;
        // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
        this.$refs.md.$img2Url(pos, _res.url);
      })
    },
    handleEditorImgAdd (pos, $file) {
      let formdata = new FormData()
      formdata.append('file', $file)
      this.imgFile[pos] = $file
      let instance = this.$axios.create({
        withCredentials: true,
        headers: {
          Authorization: token   // 我上传的时候请求头需要带上token 验证，不需要的删除就好
        }
      })
      instance.post('/api/upload/fileds', formdata).then(res => {
        if (res.data.code === 200) {
          this.$Message.success('上传成功')
          let url = res.data.data
          let name = $file.name
          if (name.includes('-')) {
            name = name.replace(/-/g, '')
          }
          let content = this.form.content
          // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)  这里是必须要有的
          if (content.includes(name)) {
            let oStr = `(${pos})`
            let nStr = `(${url})`
            let index = content.indexOf(oStr)
            let str = content.replace(oStr, '')
            let insertStr = (soure, start, newStr) => {
              return soure.slice(0, start) + newStr + soure.slice(start)
            }
            this.form.content = insertStr(str, index, nStr)
          }
        } else {
          this.$Message.error(res.data.msg)
        }
      })
    },
    filterTagName(query, item) {
      return item.tagName.indexOf(query) > -1
    },
    toSaveArticle() {
      if (!this.title) {
        this.$message.warning('请输入标题...')
        return
      }
      if (!this.mdText) {
        this.$message.warning('请输入文章内容...')
        return
      }
      this.dialogVisible = true
      this.getTagNameList()
    },
    async saveArticle() {
      if (!this.tagIdList) {
        this.$message.warning('请选至少选择一个标签...')
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
        this.$message.success('发布成功~')
        await this.$router.push({
          path: '/article',
          query: {
            id: result.data.data.data.id
          }
        })
      } else {
        this.$message.error('系统异常~ ' + result.data.data.msg)
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
        this.schoolList = result.data.data.map((school) => {
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
