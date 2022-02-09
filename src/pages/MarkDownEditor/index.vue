<template>
  <div id="editor">
    <mavon-editor style="height: 100%;width: 100%;" v-model="value"></mavon-editor>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  name: "index",
  components: {
    mavonEditor
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style scoped>

</style>
