<template>
  <div v-html="content"></div>
</template>

<script>
import '@/assets/markdown/vue.css'
import {marked} from 'marked'
export default {
  name: "index",
  props: ['text'],
  computed: {
    content() {
      return marked(this.text)
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
