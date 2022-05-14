<template>
    <div class='spots-main'>
      <div class='main-left'>
        <transfer/>
        <slider/>
      </div>
      <div class="main-center">
        <nodata/>
        <carousel/>
        <introduction/>
        <AMap/>
        <node/>
      </div>
      <div class="main-right">
        <radar/>
        <comment style="margin-top: 10px"/>
        <weather style="margin-top: 10px"/>
      </div>
      <el-backtop target=".spots-main"></el-backtop>

    </div>
</template>
<script>
import transfer from '../components/transfer/index'
import comment from '../components/comment/index'
import carousel from '../components/carousel/index'
import introduction from '../components/introduction/index'
import AMap from '../components/map/index'
import slider from '../components/slider/index'
import radar from '../components/echarts/index'
import weather from '../components/weather/index'
import node from '../components/node/index'
import nodata from '../components/nodata/index'

export default {
  data () {
    return {}
  },
  components: {
    transfer,
    comment,
    carousel,
    introduction,
    AMap,
    slider,
    radar,
    weather,
    node,
    nodata,
  },
  created () {
  },
  methods: {}
}
</script>
<style lang="scss" scoped>

.spots-main {
  display: flex;
  flex-direction: row;
  justify-content: center;

  .main-right {
    display: flex;
    flex-direction: column;
    margin: 5px;
  }

  .main-center {
    margin: 5px;
  }

  .main-left {
    margin: 5px;
  }
}

</style>
