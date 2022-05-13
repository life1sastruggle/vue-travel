<template>
  <div class="radar" v-bind="radarData">
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'radar',
  data () {
    return {
      chart: '',
      value: [],
      name: '',
      option: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        radar: {
          radius: '60%',
          center: ['50%', '50%'],
          splitNumber: 8,
          splitArea: {
            areaStyle: {
              color: '#67c23a',
              opacity: 1,
              shadowBlur: 45,
              shadowColor: 'rgba(0,0,0,.5)',
              shadowOffsetX: 0,
              shadowOffsetY: 15
            }
          },
          indicator: [
            {name: 'Accommodation', max: 4},
            {name: 'Scenery', max: 4},
            {name: 'Repast', max: 4},
            {name: 'Entertainment', max: 4},
            {name: 'Shopping', max: 4},
            {name: 'Traffic', max: 4}
          ]
        },
        legend: {
          right: 'center',
          bottom: '6',
          data: []
        },
        series: [{
          type: 'radar',
          symbolSize: 0,
          areaStyle: {
            shadowBlur: 13,
            shadowColor: 'rgba(0,0,0,.2)',
            shadowOffsetX: 0,
            shadowOffsetY: 10,
            opacity: 1
          },
          data: [{
            value: this.value,
            name: this.name,
          }
          ]
        }]
      },
    }
  },
  mounted () {
    this.init()
  },
  watch: {
    option: {
      handler (newVal, oldVal) {
        if (this.chart) {
          if (newVal) {
            this.chart.setOption(newVal)
          } else {
            this.chart.setOption(oldVal)
          }
        } else {
          this.init()
        }
      },
      deep: true
    },
  },
  computed: {
    ...mapState(['selectedSpot']),
    radarData () {
      if (this.selectedSpot) {
        this.option.series[0].data[0].value = [
          this.selectedSpot['accommodation_score'],
          this.selectedSpot['scenery_score'],
          this.selectedSpot['repast_score'],
          this.selectedSpot['entertainment_score'],
          this.selectedSpot['shopping_score'],
          this.selectedSpot['traffic_score']
        ]
        this.option.series[0].data[0].name = this.selectedSpot['name'] + ' Property'
        this.option.legend.data = [this.selectedSpot['name'] + ' Property']
      }
    },
  },
  methods: {
    init () {
      this.chart = this.$echarts.init(this.$el, 'macarons')
      this.chart.setOption(this.option, true)
    }
  }
}
</script>

<style scoped>
.radar {
  width: 380px;
  height: 360px;
  box-shadow: 2px 4px 12px #99a9bf;
  margin-bottom: 5px;
}
</style>
