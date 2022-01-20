<template>
  <div id="AMap"></div>
</template>

<script>
import {loadMap} from '../../common/asyncLoadAMap'
export default {
  name: 'index',
  created () {
    loadMap()
  },
  methods: {
  }
}
</script>

<style scoped>
#AMap {
  width: 300px;
  height: 300px;
  /*background: #EBEEF5;*/
}
</style>
