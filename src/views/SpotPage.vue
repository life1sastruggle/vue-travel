<template>
  <div class='spots-main'>
    <div class='main-left'>
        <transfer/>
        <comment/>
    </div>
    <div class="main-center">
      <carousel/>
      <introduction/>
      <AMap/>
    </div>
    <div class="main-right">
        <slider/>
        <radar/>
        <weather/>
    </div>
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
    justify-content: space-around;
    margin: 5px;
  }
  .main-center{
    margin: 5px;
  }
  .main-left{
    margin: 5px;
  }
}

</style>
