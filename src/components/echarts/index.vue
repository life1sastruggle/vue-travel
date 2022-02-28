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
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        radar: {
          radius: '66%',
          center: ['50%', '42%'],
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
            {name: 'Sales', max: 10000},
            {name: 'Administration', max: 20000},
            {name: 'Information Technology', max: 20000},
            {name: 'Customer Support', max: 20000},
            {name: 'Development', max: 20000},
            {name: 'Marketing', max: 20000}
          ]
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: ['Allocated Budget', 'Expected Spending', 'Actual Spending']
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
  width: 300px;
  height: 300px;
}
</style>
