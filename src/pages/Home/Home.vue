<template>
  <div>
    Home
    {{nowTime}}
    {{num}}
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: "Home",
  components: {

  },
  data() {
    return {
      num: 60
    }
  },
  mounted() {

    this.subTime()
  },
  computed: {
    nowTime() {
        return dayjs().format()
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
