<template>
  <div class="content">
    <div class='content-header'>{{ spotName }}</div>
    <div class='content-body'>{{ spotBody }}</div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import util from '../../common/util'

export default {
  name: 'index',
  data () {
    return {
      spotName: null,
      spotBody: null,
    }
  },
  computed: {
    ...mapState(['selectedSpot']),
  },
  methods: {
    getIntroduction () {
      this.spotName = this.selectedSpot.name
      this.spotBody = this.selectedSpot.intro
    }
  },
  mounted () {
    let that =this
    util.$on('getIntroduction', function () {
      that.getIntroduction()
    })
  }
}
</script>

<style lang='scss' scoped>
.content {
  height: 150px;
  box-shadow: 0 0 12px 4px #99a9bf;
  margin-bottom: 10px;

  .content-header {
    color: #1d1d1f;
    font-size: 28px;
    font-weight: 600;
    padding: 15px;
    text-align: center;
  }

  .content-body {
    padding: 0 15px 10px 15px;
  }

}
</style>
