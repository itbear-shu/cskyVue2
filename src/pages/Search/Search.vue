<template>
  <div>
    <div class="main">
      <div class="py-container">
        <!--bread-->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="#">全部结果</a>
            </li>
          </ul>
          <ul class="fl sui-tag">
            <!--    分类的bread        -->
            <li class="with-x" v-if="searchParams.categoryName">{{ searchParams.categoryName }}<i
                @click="delCategoryName">×</i></li>
            <!--    keyWord的bread        -->
            <li class="with-x" v-if="searchParams.keyWord">{{ searchParams.keyWord }}<i
                @click="delKeyWord">×</i></li>
            <!--    tradeMark的bread        -->
            <li class="with-x" v-if="searchParams.trademark">{{ searchParams.trademark }}<i
                @click="delTradeMark">×</i></li>
            <!--    attrInfo的bread        -->
            <li class="with-x" v-for="(prop, index) in searchParams.props" :key="index">{{ prop.split(':')[1] }}<i
                @click="delAttr(prop)">×</i></li>
          </ul>
        </div>

        <!--selector-->
        <SearchSelector @trademark="trademarkInfo" @attrInfo="getAttrInfo"/>

        <!--details-->
        <div class="details clearfix">
          <!--    导航条      -->
          <div class="sui-navbar">
            <div class="navbar-inner filter">
              <ul class="sui-nav">
                <!--     被点击时一个高亮，一个失去高亮           -->
                <li :class="{active: isOne}">
                  <a @click="changeAW('1')">综合<span v-if="isOne">
                    <i class="el-icon-bottom" v-if="isDesc"></i>
                    <i class="el-icon-top" v-if="isAsc"></i>
                  </span></a>
                </li>
                <li :class="{active: isTwo}">
                  <a @click="changeAW('2')">价格<span v-if="isTwo">
                    <i class="el-icon-bottom" v-if="isDesc"></i>
                    <i class="el-icon-top" v-if="isAsc"></i>
                  </span></a>
                </li>
              </ul>
            </div>
          </div>

          <!--    所有商品展示      -->
          <div class="goods-list">
            <ul class="yui3-g">
              <li class="yui3-u-1-5" v-for="item in goodsList" :key="item.id">
                <div class="list-wrap">
                  <div class="p-img">
                    <router-link :to="{
                      // name: 'detail',
                      params: {
                        skuId: item.id
                      }
                    }">
                      <img v-lazy="item.defaultImg"/>
                    </router-link>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>&nbsp;
                      <i>{{ item.price }}</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a href="javascript:void(0);" :title="item.title">{{ item.title }}</a>
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>{{ item.hotScore }}</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);" @click="addShopCart(item)" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                    <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!--   分页       -->
          <el-pagination
              style="margin-top: 20px; text-align: center"
              :current-page="pageNo"
              :page-sizes="[3, 5, 10]"
              :page-size="pageSize"
              layout="prev, pager, next, jumper, ->, sizes, total"
              :total="total"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchSelector from './SearchSelector/SearchSelector'
import {mapGetters} from 'vuex'

export default {
  name: 'Search',
  data() {
    return {
      searchParams: {
        //一级id
        category1Id: "",
        //二级id
        category2Id: "",
        //三级id
        category3Id: "",
        //分类名称
        categoryName: "",
        //搜索关键字
        keyWord: "",
        //排序：按综合和降序排序
        order: "1:desc",
        //页码
        pageNo: 1,
        //页面商品个数
        pageSize: 10,
        //平台售卖属性的参数
        props: [],
        //品牌名称
        trademark: ""
      }
    }
  },
  components: {
    SearchSelector
  },
  //在组件挂载之前获取从home跳转到search的传参
  beforeMount() {
    //Object.assign：ES6语法，将query和params中的参数值传递给searchParams赋值
    this.changeDataWhen$routeChange()
  },
  mounted() {
    //挂载完毕时给服务器传参请求数据
    this.getData()
  },
  computed: {
    ...mapGetters('search', ['goodsList', 'pageNo', 'pageSize', 'total', 'totalPages']),

    isOne() {
      return this.searchParams.order.indexOf('1') !== -1
    },
    isTwo() {
      return this.searchParams.order.indexOf('2') !== -1
    },
    isDesc() {
      return this.searchParams.order.indexOf('desc') !== -1
    },
    isAsc() {
      return this.searchParams.order.indexOf('asc') !== -1
    }
  },
  methods: {
    getData() {
      this.$store.dispatch('search/getSearchInfo', this.searchParams)
    },
    changeDataWhen$routeChange() {
      Object.assign(this.searchParams, this.$route.query, this.$route.params)
    },
    delCategoryName() {
      //设置为undefined是为了再次请求的时候不会被作为参数传递给服务器
      this.searchParams.categoryName = undefined
      this.searchParams.category1Id = undefined
      this.searchParams.category2Id = undefined
      this.searchParams.category3Id = undefined
      //保留params参数，删除query参数，重新进行路由跳转————自己跳到自己
      if (this.$route.params) {
        this.$router.push({name: 'search', params: this.$route.params})
      }
    },
    delKeyWord() {
      //设置为undefined
      this.searchParams.keyWord = undefined
      //再次发送请求
      this.getData()
      //通知Header组件清除keyWord
      this.$bus.$emit('clear')
      //重新进行路由跳转————自己跳到自己，删除掉params参数
      if (this.$route.query) {
        this.$router.push({name: 'search', query: this.$route.query})
      }
    },
    trademarkInfo(tmName) {
      this.searchParams.trademark = tmName
      //再次发送请求
      this.getData()
    },
    delTradeMark() {
      this.searchParams.trademark = undefined
      //再次发送请求
      this.getData()
    },
    //获取属性值
    getAttrInfo(attr) {
      //数组去重
      if (this.searchParams.props.indexOf(attr) === -1) {
        this.searchParams.props.push(attr)
      }
      //再次发送请求
      this.getData()
    },
    delAttr(attr) {
      //删除属性
      this.searchParams.props.pop(attr)
      //再次发送请求
      this.getData()
    },
    //改变升序和降序状态
    changeAW(flag) {
      //flag指示当前用户点击的是综合还价格
      if (flag === '1') {
        if (this.isDesc) {
          this.searchParams.order = '1:asc'
        } else {
          this.searchParams.order = '1:desc'
        }
      } else {
        if (this.isDesc) {
          this.searchParams.order = '2:asc'
        } else {
          this.searchParams.order = '2:desc';
        }
      }
      //重新请求数据
      this.getData()
    },
    //Pagination的自定义事件
    changePageNo(pageNo) {
      this.searchParams.pageNo = pageNo
      this.getData()
    },
    //将商品加入购物车
    async addShopCart(goodsInfo) {
      //先判断当前用户是否登录
      if(this.$store.state.user.token) {
        //发送请求，添加数据到服务器，判断加入购物车是否成功
        //仓库中的async reqAddOrUpdateShopCart返回的一定是一个Promise，所以需要添加await，async
        try{
          let result = await this.$store.dispatch('detail/reqAddOrUpdateShopCart', {
            skuId: goodsInfo.id,
            skuNum: 1
          })
          //服务器存储成功——进行路由跳转
          if(result === true) {
            this.$router.push({
              name: 'addcartsuccess',
              query: {
                skuNum: 1
              }
            })
            //将数据存储到浏览器的会话存储当中
            sessionStorage.setItem('SKUINFO', JSON.stringify({
              skuDefaultImg: goodsInfo.skuDefaultImg,
              skuName: goodsInfo.title,
              skuId: goodsInfo.id
            }))
          } else {
            //服务器存储失败——进行用户提示
            alert('加入购物车失败！')
          }
        } catch (e) {
          console.log(e.message)
        }
      } else {
        alert("未登录，请先登录...")
        this.$router.push('/login')
      }
    },
    // Pagination
    handleSizeChange(size) {
      this.searchParams.pageSize = size
      this.searchParams.pageNo = 1
      this.getData()
    },
    handleCurrentChange(page) {
      this.searchParams.pageNo = page
      this.getData()
    },
  },
  watch: {
    //监听路由的变化，当路由变化--query或params变化时重新从服务器获取数据
    $route() {
      this.changeDataWhen$routeChange()
      this.getData()
    }
  }

}
</script>

<style lang="less" scoped>
.main {
  margin: 10px 0;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .bread {
      margin-bottom: 5px;
      overflow: hidden;

      .sui-breadcrumb {
        padding: 3px 15px;
        margin: 0;
        font-weight: 400;
        border-radius: 3px;
        float: left;

        li {
          display: inline-block;
          line-height: 18px;

          a {
            color: #666;
            text-decoration: none;

            &:hover {
              color: #4cb9fc;
            }
          }
        }
      }

      .sui-tag {
        margin-top: -5px;
        list-style: none;
        font-size: 0;
        line-height: 0;
        padding: 5px 0 0;
        margin-bottom: 18px;
        float: left;

        .with-x {
          font-size: 12px;
          margin: 0 5px 5px 0;
          display: inline-block;
          overflow: hidden;
          color: #000;
          background: #f7f7f7;
          padding: 0 7px;
          height: 20px;
          line-height: 20px;
          border: 1px solid #dedede;
          white-space: nowrap;
          transition: color 400ms;
          cursor: pointer;

          i {
            margin-left: 10px;
            cursor: pointer;
            font: 400 14px tahoma;
            display: inline-block;
            height: 100%;
            vertical-align: middle;
          }

          &:hover {
            color: #28a3ef;
          }
        }
      }
    }

    .details {
      margin-bottom: 5px;

      .sui-navbar {
        overflow: visible;
        margin-bottom: 0;

        .filter {
          min-height: 40px;
          padding-right: 20px;
          background: #fbfbfb;
          border: 1px solid #e2e2e2;
          padding-left: 0;
          border-radius: 0;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

          .sui-nav {
            position: relative;
            left: 0;
            display: block;
            float: left;
            margin: 0 10px 0 0;

            li {
              float: left;
              line-height: 18px;

              a {
                display: block;
                cursor: pointer;
                padding: 11px 15px;
                color: #777;
                text-decoration: none;
              }

              &.active {
                a {
                  background: #e1251b;
                  color: #fff;
                }
              }
            }
          }
        }
      }

      .goods-list {
        margin: 20px 0;

        ul {
          display: flex;
          flex-wrap: wrap;

          li {
            height: 100%;
            width: 20%;
            margin-top: 10px;
            line-height: 28px;

            .list-wrap {
              .p-img {
                padding-left: 15px;
                width: 215px;
                height: 255px;

                a {
                  color: #666;

                  img {
                    max-width: 100%;
                    height: auto;
                    vertical-align: middle;
                  }
                }
              }

              .price {
                padding-left: 15px;
                font-size: 18px;
                color: #c81623;

                strong {
                  font-weight: 700;

                  i {
                    margin-left: -5px;
                  }
                }
              }

              .attr {
                padding-left: 15px;
                width: 85%;
                overflow: hidden;
                margin-bottom: 8px;
                min-height: 38px;
                cursor: pointer;
                line-height: 1.8;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;

                a {
                  color: #333;
                  text-decoration: none;
                }
              }

              .commit {
                padding-left: 15px;
                height: 22px;
                font-size: 13px;
                color: #a7a7a7;

                span {
                  font-weight: 700;
                  color: #646fb0;
                }
              }

              .operate {
                padding: 12px 15px;

                .sui-btn {
                  display: inline-block;
                  padding: 2px 14px;
                  box-sizing: border-box;
                  margin-bottom: 0;
                  font-size: 12px;
                  line-height: 18px;
                  text-align: center;
                  vertical-align: middle;
                  cursor: pointer;
                  border-radius: 0;
                  background-color: transparent;
                  margin-right: 15px;
                }

                .btn-bordered {
                  min-width: 85px;
                  background-color: transparent;
                  border: 1px solid #8c8c8c;
                  color: #8c8c8c;

                  &:hover {
                    border: 1px solid #666;
                    color: #fff !important;
                    background-color: #666;
                    text-decoration: none;
                  }
                }

                .btn-danger {
                  border: 1px solid #e1251b;
                  color: #e1251b;

                  &:hover {
                    border: 1px solid #e1251b;
                    background-color: #e1251b;
                    color: white !important;
                    text-decoration: none;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
