<template>
  <div class="radar"></div>

</template>

<script>
export default {
  name: 'index',
  mounted() {
    this.initChart()
  },
  methods: {
    initChart () {
      // 根据自己的id绑定echarts需要的div
      this.chart = this.$echarts.init(this.$el, 'macarons')
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          // 坐标轴指示器，坐标轴触发有效
          axisPointer: {
            // 默认为直线，可选为：'line' | 'shadow'
            type: 'shadow'
          }
        },
        radar: {
          radius: '66%',
          center: ['50%', '50%'],
          splitNumber: 8,
          splitArea: {
            areaStyle: {
              color: 'rgba(127,95,132,.3)',
              opacity: 1,
              shadowBlur: 45,
              shadowColor: 'rgba(0,0,0,.5)',
              shadowOffsetX: 0,
              shadowOffsetY: 15
            }
          },
          indicator: [
            {name: 'Price', max: 10000},
            {name: 'Environment', max: 20000},
            {name: 'Distance', max: 20000},
            {name: 'Trends', max: 20000},
            {name: 'Comment', max: 20000}
          ]
        },
        legend: {
          right: 'center',
          bottom: '5',
          data: ['Actual Spending']
        },
        series: [{
          type: 'radar',
          symbolSize: 0,
          areaStyle: {
            normal: {
              shadowBlur: 13,
              shadowColor: 'rgba(0,0,0,.2)',
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              opacity: 1
            }
          },
          data: [
            {
              value: [5500, 11000, 12000, 15000, 12000, 12000],
              name: 'Actual Spending'
            }
          ],
          // animationDuration: animationDuration
        }]
      })
    }
  }
}
</script>

<style scoped>
.radar {
  width: 400px;
  height: 370px;
  background: #c8f3b3;
}
</style>
