<template>
  <div class="order-right">
    <div class="order-content">
      <div class="title">
        <h3>我的订单</h3>
      </div>
      <div class="chosetype">
        <table>
          <thead>
          <tr>
            <th width="29%">商品</th>
            <th width="31%">订单详情</th>
            <th width="13%">收货人</th>
            <th>金额</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
          </thead>
        </table>
      </div>
      <div class="orders">
        <table class="order-item" v-for="record in records" :key="record.id">
          <thead>
            <tr>
            <th colspan="5">
              <span class="ordertitle">{{record.createTime}}&nbsp;&nbsp;
                订单编号：{{record.outTradeNo}}
                <span class="pull-right delete">
                  <img src="./images/delete.png">
                </span>
              </span>
            </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(detail, index) in record.orderDetailList" :key="detail.id">
              <td width="60%">
                <div class="typographic">
                  <img :src="detail.imgUrl" style="height: 100px; width: 100px" >
                  <a href="#" class="block-text">
                    {{detail.skuName}}
                  </a>
                  <span>x{{detail.skuNum}}</span>
                  <a href="#" class="service">售后申请</a>
                </div>
              </td>
              <td :rowspan="record.orderDetailList.length" v-if="index===0" width="8%" class="center">{{record.consignee}}</td>
              <td :rowspan="record.orderDetailList.length" v-if="index===0" width="13%" class="center">
                <ul class="unstyled">
                  <li>总金额¥{{record.totalAmount}}.00</li>
                  <li>在线支付</li>
                </ul>
              </td>
              <td :rowspan="record.orderDetailList.length" v-if="index===0" width="8%" class="center">
                <a href="#" class="btn">{{record.orderStatusName}}</a>
              </td>
              <td :rowspan="record.orderDetailList.length" v-if="index===0" width="13%" class="center">
                <ul class="unstyled">
                  <li>
                    <a href="mycomment.html" target="_blank">评价|晒单</a>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="choose-order">
        <div class="pagination">
          <Pagination :pageNo="page" :pageSize="size" :total="total" :continues="5" @changePageNo="changePageNo"/>
        </div>
      </div>
    </div>
    <el-backtop target=".order-right" :bottom="100">
      <div
          style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
      >
        UP
      </div>
    </el-backtop>
  </div>
</template>

<script>
export default {
  name: "MyOrder",
  data() {
    return {
      records: {},
      page: 1,
      size: 5,
      total: 10
    }
  },
  mounted() {
    this.getOrderInfo()
  },
  methods: {
    async getOrderInfo() {
      let result = await this.$API.reqGetOrderInfo(this.page, this.size)
      if (result.data.code === 200) {
        this.records = result.data.data.records
        console.log(result.data.data)
        this.total = result.data.data.total
      }
    },
    //Pagination的自定义事件
    changePageNo(pageNo) {
      this.page = pageNo
      this.getOrderInfo()
    }
  }
}
</script>

<style scoped>

</style>