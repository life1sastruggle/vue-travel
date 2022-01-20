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
      </div>
    </div>
    <div class='right-div'>
    </div>
  </div>
</template>
<script>
import selectSpots from '../components/selectSpots/index'
import AMap from '../components/map/index'

export default {
  data () {
    return {}
  },
  components: {
    selectSpots,
    AMap
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.content-main {
  display: flex;
  flex-direction: row;
  overflow: hidden;
}

.left-div {
  height: 100vh;
  width: 25vw;
}

.right-div {
  height: 100vh;
  width: 25vw;
  background: #035a17
}

.middle-div {
  height: 100vh;
  width: 40vw;
  display: flex;
  flex-direction: column;
  //background: #e8d551;

  .middle-upper {
    //background: #EBEEF5;
    height: 50vh;
    width: 40vw;
  }

  .middle-lower {
    height: 30vh;
    width: 40vw;
    background: blue;
  }
}

</style>
