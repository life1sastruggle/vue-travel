<template>
<div>
  <span class="demonstration">默认</span>
  <el-slider v-model="value">
  </el-slider>
</div>
</template>

<script>
export default {
  name: 'index',
  data(){
    return {
      value: 0
    }
  }
}
</script>

<style scoped>

</style>
