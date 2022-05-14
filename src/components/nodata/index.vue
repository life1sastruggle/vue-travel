<template>
<div class="container" v-if="!$store.state.selectedSpot&&!$store.state.selectedRoute">
    <div class="item">
      <img src="../../assets/image/exclamation_mark.svg">
      <span>No data</span>
    </div>
</div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped lang="scss">
.container{
  height: 500px;
  width: 1000px;
  margin-bottom: 10px;
  box-shadow: 2px 4px 12px #99a9bf;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .item{
    text-align: center;
    span{
      display: block;
      font-weight: 800;
    }
  }
}
</style>
