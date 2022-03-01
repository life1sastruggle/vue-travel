<template>
  <div class='spots-main'>
    <div class='main-left'>
        <select-spots/>
    </div>
    <div class="main-center">
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
import selectSpots from '../components/transfer/index'
import AMap from '../components/map/index'
import slider from '../components/slider/index'
import radar from '../components/echarts/index'
import weather from '../components/weather/index'

export default {
  data () {
    return {}
  },
  components: {
    selectSpots,
    AMap,
    slider,
    radar,
    weather
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
  overflow: hidden;
  justify-content: center;

  .main-right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: solid 1px #77e851;
  }

}

</style>
