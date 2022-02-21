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
      this.init_map()   // 页面加载，初始化 AMap。
    },
    methods: {
      init_map () {
        let that = this
        loadMap('314e8e673dd5048df671828de7a9267a').then(([AMap,mpUI]) => {       // MapLoader(key)  ---> 申请的个人  key
          that.map = new AMap.Map('container', {                            // html 放置 一个 id = container 的div
            mapStyle: 'amap://styles/7e8dadf307af8b4a5da5a98e53fd2657',     //   *** 地图的背景颜色   （ 可以自己在高德官网 查看如何配置 ）
            zoom: 10,
            resizeEnable: true,
            dragEnable: true
          })
          AMap.plugin(['AMap.Geolocation', 'AMap.Weather'], function () {                           //  返回当前的  个人所在的位置  （定位）
            var geolocation = new AMap.Geolocation({
              enableHighAccuracy: true, //是否使用高精度定位，默认:true
              timeout: 10000, //超过10秒后停止定位，默认：5s
              buttonPosition: 'RB', //定位按钮的停靠位置
              buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
              zoomToAccuracy: true, //定位成功后是否自动调整地图视野到定位点
            })
            that.map.addControl(geolocation)
            geolocation.getCurrentPosition()
            AMap.event.addListener(geolocation, 'complete', onComplete)
            AMap.event.addListener(geolocation, 'error', onError)

            var weather = new AMap.Weather();

            //执行实时天气信息查询
            weather.getLive('杭州市', function(err, data) {
              console.log(err, data);
            });
            function onComplete (data) {
              // data是具体的定位信息
              console.log(data)
            }

            function onError (data) {
              // 定位出错
            }
          })
        })
      }
    },
  }
</script>

<style scoped>
#container {
  width: 1600px;
  height: 800px;
  border: solid 1px #77e851;
}
</style>
