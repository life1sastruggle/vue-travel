<template>
  <div class='spots-main'>
    <div class='main-left'>
      <div class='select-pane'>
        <select-spots/>
      </div>
    </div>
    <div class="main-right">
      <div class='component-map'>
        <AMap/>
      </div>
      <div class='right-bottom'>
        <div class='component-slider'>
          <slider/>
        </div>
        <div class='component-radar'>
          <radar/>
        </div>
        <div class="component-weather">
          <weather/>
        </div>
      </div>
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
  right: 0;

  .main-left {
    height: 800px;
    width: 400px;

    .select-pane {
      height: 1000px;
      width: 400px;
    }
  }

  .main-right {
    height: 800px;
    width: 1050px;

    .component-map {
      height: 700px;
      width: 1500px;
      display: flex;
    }

    .right-bottom {
      height: 500px;
      width: 1000px;
      display: flex;
      flex-direction: row;

      .component-slider {
        height: 300px;
        width: 300px;
      }

      .component-radar {
        height: 300px;
        width: 300px;
      }

      .component-weather {
        height: 300px;
        width: 300px;
      }

    }
  }
}

</style>
