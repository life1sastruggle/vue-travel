<template>
  <div id="container">
  </div>
</template>

<script>
import loadMap from '../../common/asyncLoadAMap'
import {mapState} from 'vuex'
import util from '../../common/util'

export default {
  name: 'Home',
  data () {
    return {
      map: null,
      waypoints: [],
      AMap: null
    }
  },
  mounted () {
    this.initMap()
    var that = this
    util.$on('initMap', function (msg) {
      that.initMap()
    })
  },
  computed:{
    ...mapState(['targetSpot','sourceSpot']),
  },
  methods: {

    initMap () {
      let that = this
      loadMap('314e8e673dd5048df671828de7a9267a').then(([AMap, mpUI]) => {
        that.map = new AMap.Map('container', {
          mapStyle: 'amap://styles/7e8dadf307af8b4a5da5a98e53fd2657',
          zoom: 10,
          resizeEnable: true,
          dragEnable: true,
          lang: 'en',
        })
        AMap.plugin(['AMap.Geolocation', 'AMap.Weather', 'AMap.Driving'], function () {
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
          // that.map.addControl(geolocation)

          geolocation.getCurrentPosition()
          AMap.event.addListener(geolocation, 'complete', onComplete)
          AMap.event.addListener(geolocation, 'error', onError)

          function onComplete (data) {
            //Route planning
            var drivingOption = {
              policy: AMap.DrivingPolicy.LEAST_TIME,
              map: that.map,
            }
            var points = [{keyword: data.formattedAddress, city: '杭州'}]
            Array.from(that.targetSpot.values()).map((item) => {
              points.push({'keyword': item.name, 'city': '杭州'})
            })
            var driving = new AMap.Driving(drivingOption)
            driving.search(points, function (status, result) {
              if (status === 'complete') {
                console.log('Drawing driving route completed')
              } else {
                console.log('Failed to obtain driving data：' + result)
              }
            })
          }

          //Positioning error
          function onError (data) {
          }
        })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
#container {
  width: 1000px;
  height: 430px;
  box-shadow: 2px 4px 12px #99a9bf;

}
/deep/ .amap-logo{
  display: none;
  opacity:0 !important;
}
/deep/ .amap-copyright {
  opacity:0;
}
.panel{
  height: 100px;
  width: 100px;
  background: #FFFFFF;
}


</style>
