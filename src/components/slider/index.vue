<template>
<div class = 'slider'>
  <div class = 'inner'>
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
    height: 300px;
    box-shadow: 2px 4px 12px #99a9bf;
    margin-bottom: 10px;
  }
  span{
    font-size: 11px;

  }
  .inner{
    width: 350px;
    margin-left: 20px;

  }

</style>
