<template>
<div class = 'slider'>
  <span class="demonstration">Price</span>
  <el-slider v-model="value">
  </el-slider>
  <span class="demonstration">Environment</span>
  <el-slider v-model="value">
  </el-slider>
  <span class="demonstration">Trends</span>
  <el-slider v-model="value">
  </el-slider>
  <span class="demonstration">Comment</span>
  <el-slider v-model="value">
  </el-slider>
  <span class="demonstration">Distance</span>
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
  .slider{
    height: 300px
  }
  span{
    font-size: 11px;
  }
</style>
