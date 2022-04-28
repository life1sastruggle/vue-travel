<template>
  <div class="radar"></div>

</template>

<script>
import {host} from "../../common/config";

export default {
  name: 'index',
  data(){
    return{
        chart:'',
        option: {
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
              {name: 'Scenery', max: 4},
              {name: 'Repast', max: 4},
              {name: 'Accommodation', max: 4},
              {name: 'Shopping', max: 4},
              {name: 'Entertainment', max: 4},
              {name: 'Traffic', max: 4}
            ]
          },
          legend: {
            right: 'center',
            bottom: '6',
            data: ['Spot Property']
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
                value: [0, 1, 2, 3, 4, 3],
                name: 'Spot Property'
              }
            ]

          }]
        },

    }
  },
  created() {

  },
  mounted() {
    this.initChart()
    this.getRadarData()
  },
  watch: {
      //观察option的变化
      option: {
        handler(newVal, oldVal) {
          if (this.chart) {
            if (newVal) {
              this.chart.setOption(newVal);
            } else {
              this.chart.setOption(oldVal);
            }
          } else {
            this.init();
          }
        },
        deep: true //对象内部属性的监听
      },
  },
  methods: {
    initChart () {
      // 根据自己的id绑定echarts需要的div
      this.chart = this.$echarts.init(this.$el, 'macarons')
      this.chart.setOption(this.option, true)
    },
    getRadarData(){
      fetch(host + "attraction")
            .then(res => {
                return res.json();
            })
            .then(attraction => {
                localStorage.setItem("list", JSON.stringify(attraction.data))
                // console.log(localStorage.getItem("list"))
                let radarData = attraction.data[0]
                // console.log(radarData['name']
                this.option.series = [{
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
                        value: [radarData['scenery_score'], radarData['repast_score'], radarData['accommodation_score'], radarData['shopping_score'], radarData['entertainment_score'], radarData['traffic_score']],
                        name: 'Spot Property'
                        // name: radarData['name'],
                      }
                    ]

                  }]

            });

    }
  },

}
</script>

<style scoped>
.radar {
  width: 400px;
  height: 360px;
  box-shadow: 2px 4px 12px #99a9bf;
  margin-bottom: 5px;
}
</style>
