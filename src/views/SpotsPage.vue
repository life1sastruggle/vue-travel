<template>
  <div class='content-main'>
    <div class='left-div'>
      <div class='transfer'>
        <select-spots/>
      </div>
    </div>
    <div class='middle-div'>
      <div class='middle-upper'>
        <AMap/>
      </div>
      <div class='middle-lower'>
<!--        <slider/>-->
        <el-slider v-model="value">
        </el-slider>
      </div>
    </div>
    <div class='right-div'>
    </div>
  </div>
</template>
<script>
import selectSpots from '../components/selectSpots/index'
import AMap from '../components/map/index'
import slider from '../components/slider/index'

export default {
  data () {
    return {}
  },
  components: {
    selectSpots,
    AMap,
    slider
  },
  created () {
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.content-main {
  display: flex;
  flex-direction: row;
  overflow: hidden;
  justify-content: center;
  position: relative;

}

.left-div {
  height: 1000px;
  width: 400px;
  position: relative;
}

.right-div {
  height: 1000px;
  width: 400px;
  position: relative;

}

.middle-div {
  height: 1000px;
  width: 650px;
  display: flex;
  flex-direction: column;

  .middle-upper {
    //background: #EBEEF5;
    height: 500px;
    width: 400px;
  }

  .middle-lower {
    height: 300px;
    width: 400px;
  }
}

</style>
