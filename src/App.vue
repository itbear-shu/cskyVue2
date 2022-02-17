<template>
  <div id="outer">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header/Header";

export default {
  name: 'App',
  components: {
    Header
  },
  mounted() {
    //调用action，只执行一次

  }
}
</script>

<style>
.bread {
  margin: 0 20px;
}
.all {
  margin: 20px 30px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #ffffff;
}
.bg-purple-light {
  background: #ffffff;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
