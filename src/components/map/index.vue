<template>
  <div id="container">
  </div>
</template>

<script>
import loadMap from '../../common/asyncLoadAMap'

export default {
  name: 'Home',
  data () {
    return {
      map: null,
    }
  },
  mounted () {
    // 页面加载，初始化 AMap
    this.init_map()
  },
  methods: {
    init_map () {
      let that = this
      loadMap('314e8e673dd5048df671828de7a9267a').then(([AMap, mpUI]) => {
        that.map = new AMap.Map('container', {
          mapStyle: 'amap://styles/7e8dadf307af8b4a5da5a98e53fd2657',
          zoom: 10,
          resizeEnable: true,
          dragEnable: true
        })
        AMap.plugin(['AMap.Geolocation', 'AMap.Weather'], function () {
          var geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,
            timeout: 10000,
            //定位按钮的停靠位置
            buttonPosition: 'RB',
            //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            buttonOffset: new AMap.Pixel(10, 20),
            //定位成功后是否自动调整地图视野到定位点
            // zoomToAccuracy: true,
          })
          that.map.addControl(geolocation)
          geolocation.getCurrentPosition()
          AMap.event.addListener(geolocation, 'complete', onComplete)
          AMap.event.addListener(geolocation, 'error', onError)

          var weather = new AMap.Weather()

          //执行实时天气信息查询
          weather.getLive('杭州市', function (err, data) {
            console.log(err, data)
          })

          function onComplete (data) {
            // data是具体的定位信息
            console.log(data)
          }

          // 定位出错
          function onError (data) {
          }
        })
      })
    }
  },
}
</script>

<style scoped>
#container {
  width: 1100px;
  height: 860px;
  border: solid 1px #77e851;
}
</style>
